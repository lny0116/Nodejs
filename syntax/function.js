// abcdef의 사이에 123이라는 출력 코드가 중복 반복된다고 생각해볼때, 함수를 통해 중복된 코드를 더욱 편하게 바꿔보기.

f123(); // console.log(1); 이라는 형식으로 적지 않아도 출력되는 것을 볼 수 있다.
console.log('a');
console.log('b');
console.log('c');
f123();
console.log('d');
console.log('e');
console.log('f');
f123();
console.log('g');
console.log('h');
console.log('i');
f123(); //그리고 이 함수들이 반복되는 것은, 즉 다 같다는 의미이므로 가독성이 높아진다.

function f123(){ // 아래 나열된 코드를 함수로 그룹핑한 것.
    console.log(1);
    console.log(2);
    console.log(3);
} //함수를 지정하고, 수정할 일이 있다면 이 안에서만 해결한다면, 1억개의 코드가 있어도 간편하게 수정할 수 있다. [유지보수의 편리성↑]