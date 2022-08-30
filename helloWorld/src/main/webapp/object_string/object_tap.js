//object_tap.js
function Table(param) {
    this.members = param;
    this.addMember = function(member) {
        //members에 추가하기.
        this.members.push(member);
    }
    this.showList = function() {
        //table 태그를 만들어주는 부분
        let str = '<table border=1>';
        this.members.forEach(member => {
            str += '<tr>';
            for (let prop in member) {
                str += `<td>${member[prop]}</td>`;
            }
            str += '</tr>';
        })
        str += '</table>';
        return str;
    }
}
this.members = [{id:'user1', name:'홍길동',age:20},
                {id:'user2', name:'박철희',age:22},
                {id:'user3', name:'김민규',age:25}]

let t1 = new Table(members);
t1.addMember({id:'user4', name:'최규식', age:27});

let str = t1.showList();
document.write(str);