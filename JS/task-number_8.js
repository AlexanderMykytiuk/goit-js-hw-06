// Write code under this line
const fN = {friends: ""}
function isFreds ({friends}) {return friends}
const nam = {name: ""}
function isNam ({name}) {return name}
const getUsersWithFriend = (users, friendName) => {
 return users
   .filter(user => user["friends"].includes(friendName))
   .map(user => user.name)
}

 
console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]