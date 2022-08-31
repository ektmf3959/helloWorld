// array_ex1.js
const data = `[{"id":1,"first_name":"Creight","last_name":"Ellcock","email":"cellcock0@skype.com","gender":"Male","salary":3294},
{"id":2,"first_name":"Tanhya","last_name":"Linwood","email":"tlinwood1@hubpages.com","gender":"Female","salary":2973},
{"id":3,"first_name":"Wally","last_name":"Ingleby","email":"wingleby2@amazon.co.jp","gender":"Male","salary":6201},
{"id":4,"first_name":"Violette","last_name":"Dooney","email":"vdooney3@edublogs.org","gender":"Female","salary":5736},
{"id":5,"first_name":"Hans","last_name":"Tivnan","email":"htivnan4@ocn.ne.jp","gender":"Non-binary","salary":7684},
{"id":6,"first_name":"Felicia","last_name":"Coxen","email":"fcoxen5@independent.co.uk","gender":"Bigender","salary":2926},
{"id":7,"first_name":"Missie","last_name":"Paxforde","email":"mpaxforde6@umich.edu","gender":"Female","salary":5044},
{"id":8,"first_name":"Rickie","last_name":"Mullin","email":"rmullin7@hostgator.com","gender":"Non-binary","salary":5593},
{"id":9,"first_name":"Jamaal","last_name":"Kimbrough","email":"jkimbrough8@gnu.org","gender":"Genderfluid","salary":8080},
{"id":10,"first_name":"Heinrick","last_name":"Wilsey","email":"hwilsey9@springer.com","gender":"Male","salary":8777},
{"id":11,"first_name":"Jermaine","last_name":"Rubinfeld","email":"jrubinfelda@reuters.com","gender":"Female","salary":4769},
{"id":12,"first_name":"Lena","last_name":"Powney","email":"lpowneyb@alibaba.com","gender":"Female","salary":3889},
{"id":13,"first_name":"Glad","last_name":"Gerardi","email":"ggerardic@oakley.com","gender":"Female","salary":6381},
{"id":14,"first_name":"Gwenore","last_name":"Trebble","email":"gtrebbled@bandcamp.com","gender":"Female","salary":7730},
{"id":15,"first_name":"Callean","last_name":"Bockin","email":"cbockine@ca.gov","gender":"Male","salary":4501}]`;

let result = JSON.parse(data); // string -> object

result.forEach(element => {
    // console.log(element.first_name);
});
//성별이 Female이면서 salary 5000이상인 사람.
let str = result.reduce((acc,val,idx) => {
    if(idx == 0) {
        acc = '<ul>';
    }
    if(val.gender == 'Female' && val.salary > 5000) {
        acc += `<li>${val.id} ${val.first_name} ${val.last_name} ${val.salary}</li>`;
    }
    if(idx == result.length -1) {
        acc += '</ul>';
    }
    return acc;
}, '');

document.write(str); // <ul><li>15 Carolin Vanyarkin 5500</li>...</ul>

