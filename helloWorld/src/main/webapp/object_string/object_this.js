//object_this.js

//1. 객체에서 this는 객체를 가리킴.
//2. 함수에서 this는 전역객체(window)를 가리킴.
//3. 이벤트에서 this는 이벤트 받는 대상을 가리킴.

let obj = {}

obj.act = function() { // 메소드.
    this.value = 'default value';

    function innerAct() {
        this.value = 'innerAct value';
        console.log('innerAct: ' + this.value);
    }
    function innerReact(caller) {
        caller.value = 'innerReact value';
        console.log('this.value: ' + this.value);
        console.log('caller.value: ' + caller.value);
    }

    innerAct();
    console.log('obj객체의 this.value: '+ this.value);

    innerReact(this);
    console.log('obj객체의 this.value: '+ this.value);

}
obj.act();
console.log(obj.value);
// 이벤트.
let btn = document.createElement('button'); // <button></button>
btn.innerHTML = '클릭';
btn.onclick = function() {
    console.log(this);
}

document.querySelector('body').append(btn); // body태그 밑에 나타남
console.log(btn);