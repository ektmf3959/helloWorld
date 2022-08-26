//basic.js

let student = {} // object
student.id = 'st1';
student.name = '홍길동';
student['score'] = 80;

for (let prop in student) {
    console.log(student[prop]);
}
// console.log(student);

let numbers = []; // array
numbers[0] = 90;
numbers[1] = 80;
numbers[2] = 75;
numbers[3] = 85;

for (let num of numbers) {
    console.log(num);
}

let students = [];
let stu1 = {
    sno: '1001',
    sName: '김영희',
    score: 90
}
let stu2 = {
    sno: '1002',
    sName: '최희수',
    score: 88
}
let stu3 = {
    sno: '1003',
    sName: '정다슬',
    score: 100
}
//배열변수 값을 추가.
students[0] = stu1;
students[1] = stu2;
students[2] = stu3;

// 학생이름 출력
let str = '<ul>';
for(let student of students){
    console.log('학번: ' + student.sno + ', 학생이름: ' + student.sName + ', 점수: ' + student.score);
    str += '<li>' + '학번: <b>' + student.sno + '</b>, 학생이름: <b>' + student.sName + ',</b> 점수: <b>' + student.score + '</b></li>'
}

str += '</ul>';
document.write(str);