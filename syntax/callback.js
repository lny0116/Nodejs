// /*
// function a(){
//     console.log('a'); // a출력
// }
// function(){ //이 상태는 위의 코드와 함수의 기능, 내용은 똑같으나 이름이 없는 익명 함수 상태이다. 또한 이름이 없으면 호출을 할 수 없다.
//     console.log('a');
// }
// */
// var a = function(){ //1번째 함수 코드와 동일하게 된다. 이 코드는 a 라는 변수를 통해 값으로써 함수를 정의하고 있음. = 자바 스크립트에서는 함수가 값이다. 라는 의미이다.
//     console.log('a'); // a출력
// }
// a(); //a 호출 코드

var a = function(){
    console.log('a');
}
// 여기에 위치한 a(); 호출 코드를 지우고 아래로
function slowfunc(callback){ //오래 걸리는 함수가 있다고 생각해보자. 이때 이 함수의 일이 끝났으니까 다음 일을 하게끔 하고 싶다면 callback을 인자로 쓰고,
    callback(); //callback을 호출하면 된다.
}
slowfunc(a); //a 변수를 넣는다. 이러면: callback이라는 parameter는 a가 가리키는 함수값을 갖게 된다. = 결론적으로 callback을 호출하게 되면 console.log('a'); 부분이 출력된다.