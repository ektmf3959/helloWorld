// func.js

let num = null;

console.log(num);
//boolean : 0, null, undefined, '' => false
//함수 선언식
function sum(num1 = 0, num2 = 0) { 
    // if(!num1 && !num2)
    //     return num1 + num2; //return을 안쓰면 undefined이란 값이 return
    // else return 0;
    return num1 + num2;
}

console.log(sum(1,2,3)); // 매개값의 개수에 상관없이 있는 값만큼만 계산해서 반환.
console.log(sum(1)); // NaN(Not a Number) => 1 + undefined
console.log(sum() + sum(2,3)); //num1 = 0, num2 = 0으로 변수 넣어놓으면 5

console.log(sum);

//함수표현식
sum = function(num1, num2) { 
    return num1 + num2;
}

let showInfo = function(name) {
    return `안녕하세요 ${name}님.`;
}
console.log(showInfo('홍길동'));

let welcome = showInfo;
console.log(welcome('김민수'));

let members = ['노은경','이준의','정민선'];
for(let member of members) {
    console.log(welcome(member));
}