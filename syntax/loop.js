console.log('a');
console.log('b');

var i=0; //0부터 시작
while (i<1) { //이 또한 불리언을 사용하는데, true만 쓴다면 무한루프가 발생한다. 때문에 몇 번 반복할 것인지를 적어주어야 한다.
    console.log('c1');
    console.log('c2');
    i=i+1; // 반복문이 호출될때마다 기존 i의 값에 1을 더한다. 이때 여전히 true 상태라면 false 상태에 마주칠 때까지 실행된다.
}
console.log('d'); // 1보다 작기에 단 1번만 실행된다. 정상 출력.