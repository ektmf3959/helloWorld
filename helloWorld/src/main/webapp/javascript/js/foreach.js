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
// for반복문. 배열메소드(forEach)
// members.forEach(function(val, ind, ary) {
//     console.log(val.phone);
// }); 3~4중 정도만 된다면 이정도로 가능
// members.forEach(function(val, ind, ary) => {
//     console.log(val.phone);
// });

members.forEach(callBackFnc); // 콜백함수 이름만 넣어줌

function callBackFnc(val, ind, ary) {
    console.log(val);;
}

let str = '<table border=1>';
str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>';
members.forEach((val, ind, ary) => {
    if (val.gender == 'M') {
        str += makeTr(val, 'blue');
    } else if (val.gender == 'W') {
        str += makeTr(val, 'red');
    }
});

document.write(str);

function makeTr(mem, color) {
    let tr = `<tr style='color: ${color}'>`;

    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '</tr>';
    return tr;
}