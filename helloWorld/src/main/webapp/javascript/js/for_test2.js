// for_test2.js
const arr = [];
//arr[arr.length] = 10;

arr.push(10);
arr.push(20);

let obj = {
    sname: 'Hong',
    age: 20,
    friends: ['Park'],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    friendList:function() {
        //친구의 이름을 콘솔 출력.
        for(let i=0; i<friends.length; i++){
            console.log(obj.friends[i].sname);
        }
    }
}

obj.addFriend('Kim');
obj.addFriend({name:'Hwang', phone: '010-1111-2222'});

console.log(obj.friends[2].phone);
//console.log(obj.friends[2]['phone']);
