var express = require('express')
var app = express()
var port = 3000
var fs = require('fs');
var template = require('./lib/template.js');
var path = require('path');
var sanitizehtml = require('sanitize-html');
var qs = require('querystring');
var bodyParser = require('body-parser');
var compression = require('compression')
var helmet = require('helmet')
app.use(helmet())

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.get('*', function (request, response, next) {
  fs.readdir('./data', function (err, filelist) {
    request.list = filelist;
    next();
  })
});

app.get('/', function (request, response) {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.html(title, list,
    `<h2>${title}</h2>${description}
    <img src = "/images/hello.jpg" style="width:300px; display:block; margin-top:10px">`,
    `<a href="/create">create</a>`);
  response.send(html);
});

app.get('/page/:pageid', function (request, response, next) { //err 처리를 위해 next를 넣어준다.
  var fillterdid = path.parse(request.params.pageid).base;
  fs.readFile(`data/${fillterdid}`, 'utf8', function (err, description) {
    if (err) { //에러라면 err가 발생하게 해준다.
      next(err); //맨 끝의 err인자, 즉 500코드가 적혀있는 곳이 실행된다.
    } else { //그게 아니라면 정상 작동.
      var title = request.params.pageid;
      var sanitizedtitle = sanitizehtml(title);
      var sanitizeddescription = sanitizehtml(description, {
        allowedTags: ['h1']
      });
      var list = template.list(request.list);
      var html = template.html(sanitizedtitle, list,
        `<h2>${sanitizedtitle}</h2>${sanitizeddescription}`,
        `<a href="/create">create</a>
        <a href="/update/${sanitizedtitle}">update</a> 
        <form action="/delete_process" method="post">
        <input type="hidden" name="id" value="${sanitizedtitle}">
        <input type="submit" value="delete">
        </form>`);
      response.send(html);
    }
  });
});

app.get('/create', function (request, response) {
  var title = 'WEB - create';
  var list = template.list(request.list);
  var html = template.html(title, list,
    `<form action="create_process" method="post">
    <p><input type="text" name="title" placeholder="title"></p>
    <p>
        <textarea name="description" placeholder="description"></textarea>
    </p>
    <p>
        <input type="submit">
    </p>
</form>`, '');
  response.send(html);
})

app.post('/create_process', function (request, response) {
  var post = request.body;
  var title = post.title;
  var description = post.description;
  fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
    response.redirect(`/page/${title}`);
  });
})

app.get('/update/:pageid', function (request, response) {
  var fillterdid = path.parse(request.params.pageid).base;
  fs.readFile(`data/${fillterdid}`, 'utf8', function (err, description) {
    var title = request.params.pageid;
    var list = template.list(request.list);
    var html = template.html(title, list,
      `
        <form action="/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
    <p><input type="text" name="title" placeholder="title" value="${title}"></p>
    <p>
        <textarea name="description" placeholder="description">${description}</textarea>
    </p>
    <p>
        <input type="submit">
    </p>
</form>`, `<a href="/create">create</a> <a href="/update/${title}">update</a>`);
    response.send(html);
  });
})

app.post('/update_process', function (request, response) {
  var post = request.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;
  fs.rename(`data/${id}`, `data/${title}`, function (err) {
    fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
      response.redirect(`/page/${title}`);
    });
  })
})

app.post('/delete_process', function (request, response) {
  var post = request.body;
  var id = post.id;
  var fillterdid = path.parse(id).base;
  fs.unlink(`data/${fillterdid}`, function (err) {
    response.redirect('/');
  })
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) { //next를 통해 전달받을 1번째 인자로 err를 둔다. 그리고 보면 4개의 인자를 갖고 있는데, 이는 에러를 핸들링하기 위한 미들웨어로 정해뒀기 때문이다.
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`)
});