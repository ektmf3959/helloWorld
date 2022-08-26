// conditions.js

const members = [{
        id: 'user1',
        name: '홍길동',
        score: 80,
        phone: '010-1234-1234',
        gender: 'M'
    },
    {
        id: 'user2',
        name: '김민식',
        score: 85,
        phone: '010-5645-1234',
        gender: 'W'
    },
    {
        id: 'user3',
        name: '최우신',
        score: 55,
        phone: '010-1111-1234',
        gender: 'M'
    },
    {
        id: 'user4',
        name: '황의겸',
        score: 70,
        phone: '010-1546-1234',
        gender: 'W'
    }
];

//테이블형식(표) => 
//성별: 남자 => 파란색 글씨, 여자 => 빨간색 글씨
//makeTr(파란색, 빨간색)/ makeBlueTr(), makeRedTr()만들기

//1번방식
function makeTr(mem, color) {
    let tr = `<tr style='color: ${color}'>`;
    // `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`
    for(let prop in mem) { //(in 오프젝트 타입의 어쩌구)
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}

let str = '<table border=1>'; 
str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>';
for (let member of members) {
    if(member.gender == 'M') {
        str += makeTr(member, 'aquamarine');
    } else {
        str += makeTr(member, 'red');
    }    
}
str += '</table>';
document.write(str);

// 2번방식은 코드가 길어짐
// function makeBlueTr(mem) {
//     let tr = `<tr style='color: blue'>`;
//     // `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`
//     for(let prop in mem) {
//         tr += `<td>${mem[prop]}</td>`;
//     }
//     tr += '</tr>';
//     return tr;
// }

// function makeRedTr(mem) {
//     let tr = `<tr style='color: Red'>`;
//     // `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`
//     for(let prop in mem) {
//         tr += `<td>${mem[prop]}</td>`;
//     }
//     tr += '</tr>';
//     return tr;
// }

// let str = '<table border=1>'; 
// str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>';
// for (let member of members) {
//     if(member.gender == 'M') {
//         str += makeBlueTr(member);
//     } else if(member.gender == 'W'){
//         str += makeRedTr(member);
//     }
// }
// str += '</table>';
// document.write(str);

/////////////////////////////////////////////////////////////////

const passMember = [];

for (let i = 0; i < members.length; i++) {
    if (members[i].score > 60) {
        console.log('이름: ' + members[i].name);
        passMember[passMember.length] = members[i].name;
    }
}
console.log(passMember);

const women = []
for (let member of members) {
    if(member.gender == 'W') {
        women[women.length] = member;
    }
}
console.log(women);