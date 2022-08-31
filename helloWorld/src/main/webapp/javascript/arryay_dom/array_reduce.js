//array_reduce.js

const numbers = [2, 3, 8, 5, 1];
let sum = 0;

numbers.forEach(function (val) {
    sum += val
});
console.log(sum);

let result = numbers.reduce(function (acc, val, index, ary) { //acc 누적값
    // console.log(acc, val, index, ary);
    return acc + val;
}, 0);

result = numbers.reduce((acc, val, index, ary) => {
    console.log(acc, val);
    acc.push(val + 2); // [4, 5, ~]
    return acc;
}, []);

// <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul>
result = numbers.reduce((acc, val, idx) => {
    console.log(acc);
    if (idx == 0) {
        acc = '<ul>';
    }
    acc += '<li>' + val + '</li>';
    if (idx == numbers.length - 1)
        acc += '</ul>';

    return acc; // 다음순번의 누적초기값으로 사용.
}, '');
document.write(result);
console.log('최종결과: ', result);

// 배열요소의 max 값.
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    //제일 큰값 가져오기
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log('max: ', max);

let result3 = numbers.reduce((acc,val) => {
    return acc > val ? acc:val; 
    //조건 ? 참일경우 실행할 내용 : 거짓일경우 실행할 내용;
    
}, Number.MIN_SAFE_INTEGER);
console.log('최종결과: ', result3);

let result2 = numbers.reduce((acc,val) => {
    if(acc>val){
        return acc;
    } else {
        return val;
    }
}, Number.MIN_SAFE_INTEGER);
console.log('최종결과: ', result2);