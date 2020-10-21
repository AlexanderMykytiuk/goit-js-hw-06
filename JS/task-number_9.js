// Write code under this line
const nam = {name: ""}
function isNam ({name}) {return name}
const getNamesSortedByFriendsCount = (array) => [...array].sort((prev,next) => prev["friends"].length - next["friends"].length).map(arr => arr.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
