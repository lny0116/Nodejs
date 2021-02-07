// console.log(Math.round(1.6)); //math는 자바 스크립트가 가지고 있는 객체. 함수를 정리하고 관리하는 디렉토리 같은 걸 '객체'라고 한다. round는 반올림을 해주는 함수이다.
// console.log(Math.round(1.4)); // 위 값: 2, 이 코드값은: 1

// function sum(first,second){ //입력값을 호출하기 위해서는 호출하는 부분과 sum이 정의되어 있는 부분 사이에 매개해주는 매개체가 필요함 = 매개변수가 필요하다. first = 2를, second=4를 받는다.
//     console.log(first+second);
// } // 매개변수 = parameter라고 한다.

// sum(2,4); //sum함수를 통해 2+4 계산하기. 2,4와 같은 입력값을 argument(인자)라고 한다.
// 25.2강의 끝 *************

// 위 코드에서 math.round 애들을 출력하려면 console.log가 필요해, 얼핏보면 우리가 만든 함수 sum이 더 좋아보인다. 하지만 우리가 만든 sum은 console.log를 통해 화면에 출력되지만, 내장된 함수들은 출력에 대해 융통성있게(다양하게) 활용할 수 있다. sum을 순수하게 값으로 출력할 수 있다면, 훨씬 더 광범위하게 응용할 수 있다.
function sum(first,second){
    return first+second; //return을 붙이게 되어 함수가 실행되면 즉시 뒤의 값을 출력해주고 동시에 즉시 함수 실행을 종료한다(특수한 키워드).
} //예시로 return 함수 전에는 console.log('a');를, 뒤에는 console.log('b');를 붙인다면 a는 출력되는 반면 b는 출력되지 않는 것을 볼 수 있다.

console.log(sum(2,4)); //얼핏보면 위 코드와 값이 똑같아서 같아보이지만, 이제 sum이라는 함수를 다양하게 응용할 수 있다. = return이 그런 역할을 해준다.