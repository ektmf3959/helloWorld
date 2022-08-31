// dom_manipulate.js
// element생성 : createElement()
// textNode생성: createTextNode()
// 부모-자식 형성: appendChild()

let frm = document.createElement('form');
frm.setAttribute('action', 'addMember.jsp');
frm.setAttribute('method', 'post');

// 자식요소
let labelId = document.createElement('label');
labelId.setAttribute('for', 'user_id');
labelId.innerText = '사용자아이디';
frm.appendChild(labelId);

// 자식요소(input)
let inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'user_id');
inputId.setAttribute('id', 'user_id');
frm.appendChild(inputId);

// 자식요소
let labelId2 = document.createElement('label');
labelId2.setAttribute('for', 'user_pass');
labelId2.innerText = '사용자비번';
frm.appendChild(labelId2);

// 자식요소(input)
let inputId2 = document.createElement('input');
inputId2.setAttribute('type', 'text');
inputId2.setAttribute('name', 'user_pass');
inputId2.setAttribute('id', 'user_pass');
frm.appendChild(inputId2);

//로그인버튼
let btn = document.createElement('button');
btn.innerText = '로그인';
frm.appendChild(btn);

// div#show의 자식요소로 지정.
document.getElementById('show').appendChild(frm);
console.log(frm);

