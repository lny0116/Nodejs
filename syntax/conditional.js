// console.log('a');
// console.log('b');
// if(true){
// console.log('c1');
// } // 어떤 경우는 c1, 어떤 경우는 c2 출력하고자 한다면 if(조건문)를 이용한다. 불리언을 사용하기 때문에 들어가는 건 참, 거짓.
// if(false){
// console.log('c2');
// } // 1번째 조건이 참이므로 실행, 2번째는 거짓이기 때문에 실행되지 않음.
// console.log('d'); // 조건 기본 1 **

// console.log('a');
// console.log('b');
// if(true){ // 이 부분을 false로 바꾼다면 else 부분이 참이 되어 c2가 출력된다.
// console.log('c1');
// } else {
// console.log('c2');
// } // if(false) 와 같다.
// console.log('d'); // 조건 기본 1을 더 간편하게 바꾼 것. **

// var args = process.argv; // console input parameters
// console.log(args); // 출력값은 args 변수 안의 정보인 배열 형식이 나옴. 콘솔창에 부를때 node conditional.js gothic 이라고 하면 배열의 나열과 함께 끝에 'gothic' 이라고 나옴. 이는 nodejs에서 0번째(컴퓨터는 0부터 센다.) 출력줄은 nodejs 런타임이 어디에 위치했는지 의 정보를, 1번째는 실행시킨 경로를 제공, 2번째 줄부터는 입력값을 주도록 되어있기 때문.
// console.log('a');
// console.log('b');
// if(true){
// console.log('c1');
// } else {
// console.log('c2');
// }
// console.log('d'); // 18강 콘솔 입력값1 ******

var args = process.argv;
console.log(args[2]); // 이렇게 하면 node (파일명).js gothic에 입력한 gothic 값이 args[2]가 된다.
console.log('a');
console.log('b');
if (args[2] === '1') { // 콘솔창에 node (파일명).js 1 이라고 입력시키면 c1이 출력, 1이 아닌 다른 것이면 c2 출력.
    console.log('c1');
} else {
    console.log('c2');
}
console.log('d'); // 콘솔 입력값 2 *******