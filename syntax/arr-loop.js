// var num = [1,400,12,34,5];
// var i=0; // 반복문 전에 초기화 해주기
// while(i<5){ // 숫자가 5개 있으니 5개 미만으로 설정, 하지만 이는 정적으로 작성한 것이기 때문에 앞선 배열 뒤에 추가를 해도 출력되지 않고, 제거된 부분이 있어도 undefined로 출력된다.
//     console.log(num[i]);
//     i=i+1;
// } //배열 5개 정상 출력.

// var num = [1,12,34,505];
// var i=0;
// while(i<num.length){ //이렇게 범위를 정하면 위의 코드와 다르게 추가 및 제거에 따라 동적이게 처리할 수 있다.
//     console.log(num[i]);
//     i=i+1;
// } // 정상 출력 확인.

var num = [1,12,34,505];
var i=0;
var total =0; //초기화
while(i<num.length){
    total=total+num[i];
    i=i+1;
}
console.log(`total: ${total}`); //총 값: 552가 나옴. 정상 출력 / 22강 **