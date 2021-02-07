// readfilesync - 동기적 살펴보기

// var fs = require('fs');

// console.log('a'); // 이게 먼저 실행되면 a가 화면에 출력된다.
// var result = fs.readFileSync('syntax/sample.txt', 'utf8'); //결과를 result라는 변수에 담음
// console.log(result); // 이게 실행되면 B가 출력된다.
// console.log('c'); // c 출력 → aBc가 차례로 출력.


// readfile - 비동기적 살펴보기 → nodejs에서는 이걸 선호함.

// var fs = require('fs');

// console.log('a');
// fs.readFile('syntax/sample.txt', 'utf8', function(err, result){ //문법의 callback 부분은 이렇게 function(함수)를 사용해 표시한다. 그리고 앞에 변수를 없애고, 함수를 3번째 인자로 줘야한다.
//     console.log(result);
// }); // 함수의 첫번째 인자에서는 err(error)가 있다면 err를 제공하고, 두번째 parameter엔 파일의 내용을 인자로써 공급해주도록 되어있다.
// console.log('c'); // acB의 순서로 출력된다. 이는 a가 실행되고 다음 차례인 파일을 읽는데, 그와 동시에 c가 먼저 작업이 끝나 출력이 되고, 그것보다 후에 함수 호출 작업을 끝낸 B가 출력이 된 것이다. = 비동기적
// 비동기적인 방식으로 작업을 하는 것을 추천한다. 단순한 코드라면 동기적으로 해도 되긴 한다.
// 28-2 강의 끝~~ *********