// Write code under this line
const obj = {name : ""}
function getNum ({name}) { return name; }
const getUsersWithGender = (users, gender) => {
	return users.filter(user => user.gender === gender).map(user => user.name)
   
};

console.log(getUsersWithGender(users, 'male'));

/* [
  "Moore Hensley",
  "Ross Vazquez",  
  "Carey Barr",  
  "Blackburn Dotson"  
] */
