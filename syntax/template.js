var name = 'gothic';
var letter = 'To. '+name+'.\n\ndkanrjsk gothic rmsid '+name+' cuqhqslek. '+name; //줄바꿈이 필요할 때는 \n 을 써주면 된다.

// 리터럴(literal)은 정보를 표현하는 방법, 기호이다.

var letter = `To. ${name}.

dkanrjsk ${1+1} gothic rmsid ${name} cuqhqslek. ${name}`; // `(template literals)를 사용하면 줄바꿈(\n)을 안 사용해도 되고, 변수를 사용할 때도 ${변수 이름}을 사용하여 더 간편하게 할 수 있다. 뿐 아니라 ${}안에 넣으면 변수로 치환이 된다. [ex. 결과값에 2 표시]

console.log(letter);
