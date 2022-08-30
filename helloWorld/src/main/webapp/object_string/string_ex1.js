// string_ex1.js
let items = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odio assumenda quidem quaerat illo nulla voluptates! Quibusdam quam pariatur nulla ipsa aliquid ipsam nam numquam odio. Quis eum reiciendis at.'

let bdy = document.querySelector('body'); //body태그 찾아서 bdy변수 할당.
let div = document.createElement('div'); // div element 생성.
bdy.append(div); // body 자식 요소로 붙임.

let words = items.split(' ');
words.forEach(word => {
    let span = document.createElement('span'); // <span></span>
    span.innerText = word;

    div.append(span);
});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';
inp.onchange = function() {
    // 버튼을 클릭하면...
    let findWord = inp.value;
    let spans = document.querySelectorAll('span');
    // console.log(findWord);
    // console.log(spans);
    spans.forEach(function(span) {
        //<span>Lorem</span><span>ipsum</span>
        // findWord == span.innerText => span.remove();
        if(findWord == span.innerText) {
            span.remove();
        }
    });
    inp.value = '';
    inp.focus();
}
document.querySelector('div').after(inp,btn);
