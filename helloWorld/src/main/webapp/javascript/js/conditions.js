// conditions.js

const members = [
    {id: 'user1', name: '홍길동', score:80, phone: '010-1234-1234', gender: 'M'},
    {id: 'user2', name: '김민식', score:85, phone: '010-5645-1234', gender: 'W'},
    {id: 'user3', name: '최우신', score:55, phone: '010-1111-1234', gender: 'M'},
    {id: 'user4', name: '황의겸', score:70, phone: '010-1546-1234', gender: 'W'}
];


let welcomeFnc = function (param) {
    console.log('Welcome'+param);
}

//화살표함수 =>
let helloFnc = param => console.log('Hello' + param); 
//파라메타가 하나만 있으면 중괄호 생략가능

//함수를 매개값으로 받는 함수.
function callFunc(fnc) {
    let name = 'Hong';
    fnc(name);
}

callFunc(helloFnc);


// function welcomeFnc(param) {
//     console.log('Welcome' + param);
// }

// function helloFnc(param) {
//     console.log('Hello' + param);
// }