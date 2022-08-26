//loop.js

let numbers = [23, 33, 14, 52, 77, 55, 16];
// 1)
//짝수합/홀수번째 위치 => result
let result = 0;
// for(i=0; i<numbers.length; i++) { 짝수합
//     if(numbers[i]%2==0) {
//         result += numbers[i]
//     }
// }
// for(number of numbers) { 홀수번쨰 위치
//     if(i % 2 == 0) {
//         result += numbers[i]
//     }
// }
for(i=0; i<numbers.length; i++) {
    if(numbers[i] > 30) {
        result += numbers[i];
    }
}

// for(number of numbers) {
//     if(numbers[i] % 2 == 0) {
//         result += numbers[i]
//     }
// }
console.log('30보다 큰값: '+result);

// 2)forEach

result2=0;
// numbers.forEach(callBackFnc); // 콜백함수 이름만 넣어줌

// function callBackFnc(val, ind, ary) {
//     if(numbers[i]%2==0) {
//         result += numbers[i]
//     }
//     console.log(result);;
// }

// numbers.forEach((val, ind, ary) => {
//     if(val % 2 == 0) {
//         result2 += val;
//     }
// });
// console.log('짝수합2: '+result2);

result2=0;
// numbers.forEach((val, ind) => {  홀수위치
//     if(ind % 2 == 0) {
//         result2 += val;
//     }
// });
console.log('짝수합2: '+result2);
numbers.forEach((val) => {
    if(val > 30) {
        result2 += val;
    }
});
console.log('짝수합2: '+result2);