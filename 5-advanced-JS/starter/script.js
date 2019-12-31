// Function constructor

var john = {
    name: 'John',
    birthYear: 1989,
    job: 'teacher'
};

var Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
};

Person.prototype.calculateAge = function(){
    console.log(2019 - this.birthYear);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1989, 'teacher');

var jane = new Person('Jane', 1990, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Object.create method

var personProto = {
    calculateAge: function() {
        console.log(2019 - this.birthYear);
    }
}
john.name = 'John';
john.birthYear = 1989;
john.job = 'teacher';

var john = Object.create(personProto);

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    birthYear: {value: 1990},
    job: {value: 'designer'}
});
