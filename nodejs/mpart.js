var m = { //객체, 함수가 많다고 가정해보자.
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

module.exports = m; //우리가 만들고 있는 모듈이 담겨있는 mpart.js에 여러 기능들 중 m이 가리키는 저 객체를 모듈 바깥에서 사용할 수 있도록 exports하겠다는 의미.