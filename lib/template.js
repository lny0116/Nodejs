module.exports = { //이렇게 써줘도 모듈을 외부로 보낼 수 있다.
    html: function (title, list, body, control) {
      return `
            <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          ${control}
          ${body}
        </body>
        </html>
            `; //title 부분의 web1 부분을 수정해 잘 동작되는지 체크 = 잘 된다!
    },
    list: function (filelist) {
      var list = '<ul>';
      var i = 0;
  
      while (i < filelist.length) {
        list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
      }
      list = list + '</ul>';
      return list;
    }
  }