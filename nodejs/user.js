var bcrypt = require('bcrypt');
const saltRounds = 10;

var user = {
    username: null,
    password: "",
    id: undefined,
};

var users = [
    {
        username: null,
        password: "",
        id: 1,
    },
    {
        username: null,
        password: "",
        id: 2,
    },
    {
        username: null,
        password: "",
        id: 3,
    },
];


var getUser = id => (id == undefined) ? users: 
                        users.filter(el => el.id == id)[0];

var setUser =  (id, userData) => {
    var index = users.findIndex(e => e.id == id);
    users[index] = userData;
    return resetPassword(index, userData.password)
}

function resetPassword(index, password = "NO_PASSWORD"){
    return new Promise(function(resolve, reject){
        bcrypt.hash(password, saltRounds, function(err, hash){
            if(err){reject(err)}
            users[index].password = hash;
            resolve();
        });
    });

    // users[index].password = 'xyz_'+(password)+ '_123';
}


module.exports   = { getUser, setUser, resetPassword};