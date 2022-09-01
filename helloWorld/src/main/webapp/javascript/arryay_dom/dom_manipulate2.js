// dom_manipulate2.js
const members = [{
        mid: 'admin',
        mname: '관리자',
        mphone: '010-1111-2222'
    },
    {
        mid: 'aaaa1',
        mname: '에이맨',
        mphone: '010-1234-5656'
    },
    {
        mid: 'bbbb2',
        mname: '비비맨',
        mphone: '010-1588-7979'
    }
]

document.addEventListener('DOMContentLoaded', function () {

    showMember();
    //등록버튼 이벤트.
    let addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addMember);
    // 회원찾기 이벤트.
    let findBtn = document.getElementById('findMember');
    findBtn.addEventListener('click', findMember);
    // 전체 선택/해제 이벤트.
    let allCheck = document.getElementById('allcheck');
    allCheck.addEventListener('change', allChecked);

}); // dom요소에 이벤트 등록.

function allChecked() {
    // true / false 값은 this의 checked값을 할당.
    let chks = document.querySelectorAll('tbody onput[type="checkbox"]');
    chks.forEach(check => {
        check.checked = this.checked;
    })
}

function findMember() {
    // 찾을 아이디.
    let id = document.getElementById('mid').value;
    console.log(id);

    let trs = document.getElementsByTagName('tbody')[0].children;
    trs = document.querySelectorAll('tbody>tr');
    console.log(trs); // NodeList [tr, tr, tr]
    trs.forEach(tr => {
        // tr.className = ''; // 클래스 속성값을 변경.
        tr.removeAttribute('class');
    })
    trs.forEach(tr => {
        console.log(tr.firstElementChild.textContent);
        if (tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus');
            // 값 변경
            let childTd = tr.children;
            childTd[1].textContent = document.getElementById('mname').value;
            childTd[2].textContent = document.getElementById('mphone').value;
        }
    });
}

function showMember() {
    // 리스트 보여주기.
    let table = document.getElementById('list');
    members.forEach(member => {
        let mValues = [];
        //object -> array.
        // for( let prop in member) {
        //     mValues.push(member[prop]);
        // }
        mValues = Object.values(member); // Object.keys(member): [속성, 속성]
        let tr = makeTr(mValues);
        table.appendChild(tr); // <table><tr><td><button>삭제</button></td></tr></table>
    });
}



function addMember() {
    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');

    console.log(mid.value, mname.value, mphone.value);

    // 저장값이 없으면 warning.
    if (!mid.value || !mname.value || !mphone.value) {
        alert('필수값을 입력하세요!!!');
        return; // 함수종료.
    }

    const mValues = [mid.value, mname.value, mphone.value]
    let tr = makeTr(mValues);
    document.getElementById('list').appendChild(tr);

    // 초기화.
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
} // end of addMember().

// function makeTr(mValues = []) {
//     let tr = document.createElement('tr');
//     tr.addEventListener('click', function() {
//         alert(this.firstElementChild.innerText);

//         // 선택된 tr의 정보를 입력화면에 보여지도록
//        document.getElementById('mid').value = this.firstElementChild.innerText;
//        document.getElementById('mname').value = this.firstElementChild.nextElementSibling.innerText;
//        document.getElementById('mphone').value = this.firstElementChild.nextElementSibling.nextElementSibling.innerText;
//     },false);
    
//     tr.style.textAlign = 'center';
//     mValues.forEach(val => {
//         let td = document.createElement('td'); // id 위치
//         let txt = document.createTextNode(val);
//         td.appendChild(txt); // <td>user1</td>
//         tr.appendChild(td); // <tr><td>user1</td></tr>
        
//     });

function makeTr(mValues = []) {
    let tr = document.createElement('tr');
    tr.addEventListener('click', function () {
        console.log(this.firstElementChild.innerText); // <td><button>user1</button></td>
        // 선택된 tr의 정보를 입력화면에 보여지도록.
        let id = this.firstElementChild.innerText;
        let name = this.firstElementChild.nextElementSibling.innerText;
        let phone = this.children[2].innerText;
        document.getElementById('mid').value = id;
        document.getElementById('mname').value = name;
        document.getElementById('mphone').value = phone;
    }, false);

    //체크박스 추가.
    // <tr><td><input type=checkbox>
    let tdd = document.createElement('td');
    let check = document.createElement('input');
    check.addEventListener('click', function(e) {
        // tr의 이벤트가 발생하지 않도록 하기 위해서.
        e.stopPropagation();
    })
    // check.checked = true; // 기본값 : 체크
    check.setAttribute("type","checkbox");//check.type = 'checkbox'; // check.setAttribute('type')
    tdd.appendChild(check);
    tr.appendChild(tdd);

    // // 체크박스 추가
    // let check = document.createElement('input');
    // check.addEventListener('click', function (e) {
    //     // tr의 이벤트가 발생하지 않도록 하기 위해서.
    //     e.stopPropagation();
    // })
    // check.checked = true; // 기본값 : 체크
    // check.setAttribute('type', 'checkbox');
    // td = document.createElement('td');
    // td.appendChild(check);
    // tr.appendChild(td);

    mValues.forEach(val => {
        let td = document.createElement('td'); // id위치 <td>user1</td>
        let txt = document.createTextNode(val);
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1</td></tr>
    });

    //삭제버튼 추가
    let td = document.createElement('td'); // <td></td>
    let btn = document.createElement('button'); // <button></button>
    let txt = document.createTextNode('삭제');
    btn.addEventListener('click', function (e) {
        this.parentElement.parentElement.remove(); // tr삭제
        e.stopPropagation(); // 이벤트 전파 차단.
    }, false);
    btn.appendChild(txt);
    td.appendChild(btn); // <td><button>삭제</button></td>
    tr.appendChild(td); // <tr><td><button>삭제</button></td></tr>

    return tr;

}

// document.getElementById('mid').value = this.firstElementChild.innerText;
// document.getElementById('mname').value = this.firstElementChild.nextElementSibling.innerText;
// document.getElementById('mphone').value = this.firstElementChild.nextElementSibling.nextElementSibling.innerText;