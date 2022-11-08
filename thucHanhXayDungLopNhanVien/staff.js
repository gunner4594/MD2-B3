var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setName = function (newName) {
        this.name = newName;
    };
    Staff.prototype.setEmail = function (newEmail) {
        this.email = newEmail;
    };
    Staff.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    return Staff;
}());
var staff = new Staff('Staff 1', 'staff@gmail.com', 20);
console.log(staff.getName());
staff.setName('Duy');
console.log(staff.getName());
