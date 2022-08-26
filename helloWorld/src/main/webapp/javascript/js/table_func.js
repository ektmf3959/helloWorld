//table_func.js

//let  변수선언
//const 상수선언 값을 바꿀 수 없다는 특징
function makeTr(mem={}) {
    let tr = '<tr>';
    // `<td>${member.id}</td><td>${member.name}</td><td>${member.score}</td>`
    for(let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '<td><button>확인</button><td>';
    tr += '</tr>';
    return tr;
}
function makeHd() {
    let titles = ['아이디', '이름', '점수','연락처','확인'];
    let tr = '<tr>';
    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}

const members = [
    {id: 'user1', name: '홍길동', score:80, phone: '010-1234-1234'},
    {id: 'user2', name: '김민식', score:85, phone: '010-5645-1234'},
    {id: 'user3', name: '황의겸', score:70, phone: '010-1546-1234'}
];

let str = '<table border=1>'; //배열에 변수를 읽어올때는 of
str += makeHd();
//'<tr><th>아이디</th><th>이름</th><th>점수</th></tr>';
for (let member of members) { //{id: 'user1', name: '홍길동', score:80}
    str += makeTr(member);
}
str += '</table>';
document.write(str);
