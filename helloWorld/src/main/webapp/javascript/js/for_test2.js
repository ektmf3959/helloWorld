// for_test2.js
const arr = [];
//arr[arr.length] = 10;

arr.push(10);
arr.push(20);

let obj = {
    sname: 'Hong',
    age: 20,
    friends: [{sname:'Park'}],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    friendList : function(){
        for(let i =0; i<obj.friends.length; i++){
           console.log(obj.friends[i].sname)
     
        }
    }    
}

obj.addFriend({sname: 'Kim'});
obj.addFriend({sname:'Hwang', phone: '010-1111-2222'});

console.log(obj.friends[2].phone);
//console.log(obj.friends[2]['phone']);
console.log(obj.friends[2].sname);

obj.friendList();
