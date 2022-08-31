// array_dimen.js

const members = [
    ['홍길동', 20],
    ['김익수', 25],
    ['손봉호', 23]
]
members.push(['도소람', 25]);
members[0][1] = 22;

const objMembers = [];
// members.forEach(member => {
//     console.log(`이름: ${member[0]}, 나이: ${member[1]}`);
// })

//배열 => object 로 변환
members.forEach(member => { 
    console.log(`이름: ${member[0]}, 나이: ${member[1]}`);
    let obj = {
        name: member[0], 
        age: member[1]
    }
    objMembers.push(obj);
})
console.log(objMembers);

// object => 배열로 변환
const aryMembers= []; 
objMembers.forEach(member => { 
    let ary = [member.name, member.age];
    aryMembers.push(ary);
});
console.log(aryMembers);

// console.table(members);