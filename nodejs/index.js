// TODO: search about overriding 
// function  resetPassword(p){
//     console.warn('Reset Password');
// }
var { resetPassword, getUser, setUser } = require('./user');
var students = require('./students');

// console.log(getName(), getName, name, getAge(),getGPA());
// setUser({
//     id: 1,
//     username: "Raghad",
//     password: "123123"
// }); 

// resetPassword();
// resetPassword(123456)
setUser(2, {
    id: 2,
    username: "Raghad",
    password: "123123"
}).then(()=>{
    console.log(getUser());
    console.log(getUser(2));
}).catch(err=> console.error(err));