
var student = {
    name: 'ahmed',
    age: 24,
    GPA: 70
};

function getName(){
    return student.name;
}

var name = (function (){
    return student.name;
})();

var getAge = function(){
    return student.age;
}

var getGPA = () => student.GPA;


module.exports = {
    getAge,
    getGPA,
    getName,
    name
};