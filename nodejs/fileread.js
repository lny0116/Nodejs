var fs = require('fs'); // 파일 시스템을 다룰 수 있게 하는 코드. 홈피 제시로는 const 상수를 이용하지만, 필자는 먼저 배운 변수를 사용해서 실행.
fs.readFile('sample.txt', 'utf8', function(err, data){ // 파일을 읽게 해주는 코드. utf8을 이용해 처리할 수 있는 형태로 변경해줌.
    console.log(data);
}); // sample.txt 에 적힌 문장이 출력된다.