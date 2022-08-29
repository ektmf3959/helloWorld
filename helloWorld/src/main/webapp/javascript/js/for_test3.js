// 함수의 스코프 체인.
var a = 3; //전역변수
var b = 5;

function outerFunc() {
    console.log(a); // 1
    console.log(b); // undefined
    a = 2; 
    b = 4;
    function innerFunc() {
        a = b;
    }
    innerFunc();
    console.log(a); // 4
    var b = 8; //지역변수s
    // var c = 3;
    console.log(b); // 8
}
outerFunc();
console.log(b); // 5
// console.log(c); // 지역변수는 호출X







//전역 스코프
var x = 'global x';
var y = 'global y';
function outer() {
  //지역 스코프
   var z = "outer's local z";
    console.log(x);
    // 스코프 체인에 의해 outer 함수 스코프에서 검색 후 상위 스코프인 전역 스코프로 이동하여 변수 x 참조
    console.log(y);
    // 스코프 체인에 의해 outer 함수 스코프에서 검색 후 상위 스코프인 전역 스코프로 이동하여 변수 y 참조
    console.log(z);
    // 스코프 체인에 의해 outer 함수 스코프에서 변수 z 검색 후 참조
    function inner() {
        // 하위 지역 스코프
        var x = "inner's local x";
        console.log(x);
        // 스코프 체인에 의해 inner 함수 스코프에서 변수 x 검색 후 참조
        console.log(y);
        // 스코프 체인에 의해 inner 함수 스코프에서 검색 후 상위 스코프인 outer 함수의 지역 스코프로 이동하여 검색 후
        // 다시 outer 함수의 상위 스코프인 전역 스코프에서 검색하여 발견한 변수 y 참조
        console.log(z);
        // 스코프 체인에 의해 inner 함수 스코프에서 검색 후 상위 스코프인 outer 함수의 지역 스코프로 이동하여 변수 z 검색 후 참조
    }
  inner();
}  
outer();
console.log(x);//'global x', 전역 스코프에서 전역 변수 x 참조
console.log(z);//참조 오류