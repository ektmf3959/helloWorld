//variable_ref.js

//원시형 vs 참조형
let str1 = 'Hello'; //string 문자열
let str2 = new String('Hello'); //object 객체타입.

console.log(str1 == str2); //값을 비교.
console.log(str1 === str2); // 값과 타입 비교.

let num1 = 20; //number
let num2 = new Number(20); // object
console.log(num1 == num2);

let obj; // undefined.
obj = null; // null.

let sym1 = Symbol('symbol'); // unique 키값을 생성.
let sym2 = Symbol('symbol'); //
console.log(sym1 == sym2);

// 객체(object)
obj = {
    sname: 'Hong', //속성: 속성값
    age: 20,
    showAge: function () {
        console.log('나이는 ' + this.age + ' 입니다.');
    } //메소드
}
console.log(obj.sname);
console.log(obj['age']);
obj.showAge();

obj.sname = 'Hwang'; // 값 할당.

// 배열
const numbers = []; // new Array();
numbers[numbers.length] = 10; // 추가.
numbers[numbers.length] = 20; // 추가.
numbers[numbers.length] = 30; // 추가.

numbers.forEach(function (val) {
    console.log(val);
}); // 메소드(콜백함수(값,인덱스,배열))


const randomVals = [];
for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 10); // 0 ~ 10 임의값을 생성.
    randomVals[i] = val;
    // randomVals.forEach((val) => {
    //     if(val > 5) {
    //         console.log('랜덤 값은? ' + val);
    //     }
    // });
}

console.clear(); // 콘솔메세지 초기화.
randomVals.forEach(function (val) {
    if (val > 5) {
        console.log('랜덤 값은: ' + val);
    }
});

//Math.random() : 0 ~ 1 임의값 생성.
// 21 ~ 50 까지의 임의 값을 생성. : Math.ceil((Math.random()*30) + 20)
randomVals.splice(0, randomVals.length); //

for (let i = 0; i < 5; i++) {
    randomVals[i] = Math.ceil((Math.random() * 30) + 20)
}
console.log('랜덤~: ' + randomVals);
//[3, 1, 6, 9, 4]
// console.log(randomVals)

// console.log(Math.ceil(.8)); // 0 ~ 1

// randomVals.forEach(function(val) {
//     if (val > 0) {
//         console.log('랜덤 값은: ' + val);
//     }
// });
console.clear(); // 콘솔메세지 초기화.
randomVals.forEach(showEven); // 짝수만출력

//콜백함수
function showEven(val) {
    if (val % 2 == 0) {
        console.log(val);
    }
}

console.log('3' + 4); //34
console.log('3' * 4); //12

console.log((3).toString()); // 숫자 타입을 문자타입으로 변환

console.log(Math.abs(-20));
console.log(Math.sign(-30));

console.clear();
const arr2 = [-3, 2, -45, 0, 4, 7];
const arr3 = arr2.map(function (val) {
    return Math.sign(val);
}); // 배열의 갯수만큼 콜백함수 실행. => 새로운 배열 반환.
console.log(arr3);

//NaN, Infinity
console.log(3 / 'five'); //NaN
console.log(-1 / 0); //-Infinity