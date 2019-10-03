var scores = [20, 30, 1, 8, 55, 88, 3, 0]
var friends = ["ola", "uber", "zoom", "ridez", "Ola", "Zoom"]

var newScore = new Array(20, 30, 1, 8, 55, 88, 3, 0)

console.log(scores.length);
console.log(friends[1]);

//sort the string array
console.log("0: " + friends);
var sortedfriendsascending = friends.sort()
console.log(sortedfriendsascending);
console.log("1: " + friends);
var sortedfriendsdescending = friends.sort().reverse().slice(1, 3)
console.log("2: " + friends);
console.log(friends.sort().reverse());
console.log("3: " + friends);
console.log(sortedfriendsdescending);

//sort the number array
var scoresortedascending = scores.sort(function(a, b){
    return a-b
})
console.log(scoresortedascending);

var scoresorteddescending = scores.sort(function(a, b){
    return b-a
})
console.log(scoresorteddescending);
console.log(friends);
// pop and delete the last element out of an array
var friend = friends.pop()
console.log(friend);
console.log(friends);
// insert the element at the last position
var newfriends = friends.push("carz")
console.log(friends);
console.log(newfriends);

//insert new element at start of an array
var newone  = friends.unshift("mars")
console.log(friends);
console.log(newone);

console.log(friends.shift());
console.log(friends);
var runforall = []
friends.forEach(function(a){
     console.log(a.toUpperCase());
     runforall.push(a.toUpperCase())
})

console.log(runforall);

