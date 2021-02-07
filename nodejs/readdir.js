var testFolder = 'data'; //내가 실행하고자 하는 위치를 기준으로해서 data 디렉토리를 적어주면 된다(필자 기준 main.js의 데이터 파일은 data). = './data'와 같은 뜻이다. 이때 ./는 현재 디렉토리라는 뜻.
var fs = require('fs');

fs.readdir(testFolder, function(err, filelist){ //err(error를 줄인 말)과 filelist는 변수 이름이다. 그냥 암거나 써도 된다. 중요한 건 자리수와 위치가 중요.
    console.log(filelist);
}); //data 경로에 있는 파일들이 배열처럼 나열되어 출력.
// 즉, nodejs에선 어떤 특정 디렉토리에 있는 파일의 목록을 배열 형식으로 만들어 전달한다. 이를 우리는 반복문을 통해 반복적으로 처리하여 결과를 나타나게끔 한다.