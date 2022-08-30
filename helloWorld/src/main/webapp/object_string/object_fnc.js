// object_fnc.js

// 생성자 함수(constructor Function)
function Student(sno, sname) {
    this.sno = sno;
    this.sname = sname;
    this.showInfo = function() {
        return `학번은 ${this.sno}, 이름은 ${this.sname}입니다.`;
    }
}

let s1 = new Student('s11', '홍길동');
console.log(`학번은 ${s1.sno}`);
console.log(s1.showInfo());
