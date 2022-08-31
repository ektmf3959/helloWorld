// string_exp.js

let now = new Date(); //
console.log(now.toDateString()) // Tue Aug 30 2022
console.log(now.toLocaleDateString()) // 2022. 8. 30.
console.log(now.toLocaleTimeString()) // 오후 5:28:14
console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);

console.log(`${now.getSeconds()<10 ? '0'+now.getSeconds() : now.getSeconds()}`);
console.log(`0${now.getSeconds()}`.slice(-2));

console.log('abc'.toUpperCase()); // 대문자변환
console.log('ABC'.toLowerCase()); // 소문자변환

Date.prototype.hhmiss = function() {
    // 09:08:07, 12:34:07 으로 출력해주는 메소드
    console.log(`${now.getHours()<10? '0'+now.getHours(): now.getHours()}:${now.getMinutes()<10? '0'+now.getMinutes(): now.getMinutes()}:${now.getSeconds()<10? '0'+now.getSeconds(): now.getSeconds()}`)
}

console.log(now.hhmiss());