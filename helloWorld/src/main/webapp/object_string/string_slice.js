// string_slice.js

let str = 'Good, Morning!';
console.log(str.length);
console.log(str.slice(2,7)); // index:2(include) ~ index:7(exclude)
console.log(str.slice(2)); // index:2 ~ 끝까지.
console.log(str.slice(2, -2)); // index:2 ~ index:(14-2) 자리
console.log(str.slice(-2));//index:(14-2) 자리

console.log(str.substring(0,7));
// substr(3,5); indec:3 부터 5문자.

// 문자열을 찾아서 인덱스를 반환
console.log(str.indexOf('Mor'));
console.log('Good Morning, Good Afternoon, Good Evening'. lastIndexOf('Goods'));

str = 'Good Morning, Good Afternoon, Good Evening';
let position = str.indexOf('Good', str.indexOf('Good') + 1); // => 0
console.log(position); // 두번째 Good 문자 있는 위치 인덱스.

//문자열에서 반복되는 구문의 횟수.
let cnt = 0;
let pos = str.indexOf('Good');

while(pos != -1) {
    cnt++
    pos = str.indexOf('Good', pos + 1);
}
console.log(cnt + ' 회');

let searchKey = prompt('찾을 이름을 입력.'); 
const members = [
    {name:"황병걸", age:25},
    {name:"황병찬", age:23},
    {name:"황병호", age:29},
    {name:"황병준", age:18},
]
// members 배열에서 serchKey을 찾아서 나이 콘솔에 출력.

// members.forEach(member => {
//     if (member.name.indexOf(searchKey) != -1) { //includes() => true/false
//         console.log(member.name + '은 ' + member.age + '살.');
//     }
// });

members.forEach(member => {
    if (member.name.includes(searchKey)) { //includes() => true/false
        console.log(member.name + '은 ' + member.age + '살.');
    }
});

