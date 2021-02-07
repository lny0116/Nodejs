//console.log('dkanrjsk rmsid cuqhqslek.'); //만약 이게 1억 줄이라 생각하면, 이럴땐 변수를 사용하는 게 편하다. 아래는 예시

//var letter = 'dkanrjsk rmsid cuqhqslek.';
//console.log(letter); // 결과는 똑같지만, 데이터에 이름을 부여함으로써 코드의 가독성은 훨씬 좋아진다.

// 그리고 중복을 제거하면 훨씬 더 좋은 코드를 짤 수 있다. 아래는 예시


//var letter = 'To. gothic. dkanrjsk gothic rmsid gothic cuqhqslek. gothic'; // 이렇게 gothic이 여러번 들어간 게 만약 1억 줄에 1억의 중복이라면, 방대한 데이터가 사용될 것이고, 사용된 gothic이 같은 뜻인지 또는 바꾸면 안되는 것인지 판단이 힘들다. 이럴땐 변수를 사용해주는 것이 좋다.

var name = 'gothic';
var letter = 'To. '+name+'. dkanrjsk gothic rmsid '+name+' cuqhqslek. '+name; // 결과는 똑같지만, '+name+'의 부분이 중복되는 거라는 것을 알 수 있으며 반드시 같은 거라는 것을 확신할 수 있다. 가독성 굿. 게다가 만약 gothic을 다른 단어로 바꾸게 되는 상황에서도 다같이 바꿀 수 있어, 효율성 면에서도 좋다.
console.log(letter);