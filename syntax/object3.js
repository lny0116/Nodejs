//1억줄이 넘는 코드를 프로젝트하고 있다고 생각해보자~

/*
var v1 = 'v1'; 라고 할때 다른 사람이
~100,000,000 code~
v1 = 'gothic'; 이다 라고 정의 해버리면 = v1이 gothic이라고 출력되는 상황이 벌어짐. 이걸 해결해주는게 객체.
var v2 = 'v2'; 
*/

var p = { //연관된 것들을 정리하기.
    v1: 'v1',
    v2: 'v2', //이렇게 v1, v2를 담아주면 문제없다!
    f1: function () { //아래의 f1, f2 함수를 이렇게 객체로 정리해준다.
        console.log(this.v1); //처음엔 변수 o 여서 o.v1이라고 호출했는데, 변수가 후에 바뀔 수가 있다. 이럴땐 아래 계속
    },
    f2: function () {
        console.log(this.v2); //함수와 같은 함수가 객체 안에서 사용될 때 참조할 수 있는 키워드(this)를 써준다.
    },
}

/*
function f1(){
    console.log(o.v1);
}
function f1(){
    ~code~
}
function f2(){
    console.log(o.v2);
} f1, f2라는 함수를 정의하고 쓰는데, 누군가 f1이라는 똑같은 함수를 사용했을 때! 이 또한 객체를 이용해 객체의 멤버로 해주면 된다.
*/

p.f1();
p.f2();