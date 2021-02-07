// var arr=['a', 'b', 'c', 'd']; //배열은 대괄호[]안에 넣고 싶은 데이터를 넣어주면 된다. 이때 넣는 데이터는 숫자, 불리언 등 상관이 없다. + 배열은 만든 뒤 호출할 수 있어야 하기에, 변수를 사용해준다. 이게 배열 생성 방법.
// console.log(arr[1]); //읽는 방법, 배열 안에 있는 데이터를 호출할 때는 []를 똑같이 써주며, 이때 호출하고 싶은 데이터가 'b'라면 0부터 카운트되기 때문에 '1'을 입력해주면 된다.
// console.log(arr[3]); //d 출력
// arr[2]=3; // 2번째 자리에 있는 c값을 3으로 변경해주는 것. 이렇게 수정해주면 된다.
// console.log(arr); //전체 배열 출력
// console.log(arr.length); //배열 안의 값이 몇 개인지 알아내는 코드. length를 활용한다.
// arr.push('e'); //push를 이용해 배열 뒤에 e값을 추가하기.
// console.log(arr); // 추가된 출력을 볼 수 있다. - 여기까지가 강의 내용****

//아래는 내가 배열 찾아본 거 정리한 것.
// var arr=['a', 'b', 'c', 'd'];
// arr.push('e'); //push를 이용해 배열 맨 끝에 e값을 추가하기.
// console.log(arr); //끝에 e가 추가된 것을 볼 수 있다.
// var arr=['a', 'b', 'c', 'd'];
// arr.unshift('1'); //unshift를 이용해 맨 앞에 1값을 추가하기.
// console.log(arr); //앞에 1이 추가된 것을 볼 수 있다.
// var arr=['a', 'b', 'c', 'd'];
// arr.pop(); //pop을 이용해 맨 끝의 d를 제거하기.
// console.log(arr); //d가 사라진 것을 볼 수 있다.
// var arr=['a', 'b', 'c', 'd'];
// arr.shift(); //shift를 이용해 맨 앞의 a를 제거하기.
// console.log(arr); //a가 사라진 것을 볼 수 있다.
// var arr=['a', 'b', 'c', 'd'];
// arr.splice(1, 0, '1', '2'); //splice는 splice(위치, 삭제 건수(추가할 경우 0으로 표기), 요소(~))의 문법으로 적으면 된다.
// console.log(arr); //1의 위치에 1,2가 추가된 것을 볼 수 있다. 이때 한 개만 추가할 수도, 여러개를 추가할 수도 있다.
var arr=['a', 'b', 'c', 'd'];
arr.splice(1, 2,); //위치에 1번과 삭제 건수 2건을 적음으로, 1번째 칸의 2개 배열인 b,c를 제거하기.
console.log(arr); // b,c가 삭제된 것을 볼 수 있다. [출력값: a, d]
//끝 *******************************