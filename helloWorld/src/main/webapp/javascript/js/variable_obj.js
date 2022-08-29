//variable_obj.js

let strAry = [];
for (let i = 0; i < 10; i++) {
    strAry[i] = 'i' + i; // i0, i1 ,i2 - i9
}

//배열 for .. of
for (let str of strAry) {
    console.log(str);
}

// 객체 for .. in
let obj = {
    fname: '길동',
    lname: '홍',
    age: 20,
    fullName: function() {
        return this.lname + ' ' + this.fname;
    }
}
for ( let prop in obj) {
    console.log(prop, obj[prop]); // obj.fname, obj.lname
}

// 배열[{객체},{객체},{객체}]
let members = [
    {id: 'user1', name: '사용자1'},
    {id: 'user2', name: '사용자2'},
    {id: 'user3', name: '사용자3'}
]
let str = '<table border=1>';
for(let member of members) {
    str += '<tr>';
    for(let prop in member) {
        str += `<td>${member[prop]}</td>`;
        console.log(prop,member[prop]); // prop > id, name // ,member[prop] > user1,사용자1
    }
    str += '</tr>';
    console.log('==============');
}
str += '</table>';
document.write(str);

str = '<table border=1>';
// forEach()
members.forEach(createTable); // createTable: 콜백함수.
str += '</table>';
document.write(str);

function createTable(val, idx){
    // 테이블의 헤더.
    if(idx == 0) {
        str += '<tr>';
        for(let prop in val) {
            str += `<th>${prop}</th>`;
        }
        str += '<th>버튼</th>'
        str += '</tr>';
    }

    // 테이블의 데이터 영역.
    // val => {id: 'user1', name:'사용자1'}
    str += '<tr>';
    for(let prop in val) {
        str += `<td>${val[prop]}</td>`;
    }
    str += '<td><button onclick="alertName(event)">클릭</button></td>';
    str += '</tr>';
}

function alertName(e) {
    // console.log(e.target.parentElement.parentElement.style.backgroundColor = 'grey');
    console.log(e.target.parentElement.parentElement.remove());
    //window.alert(e)
}
