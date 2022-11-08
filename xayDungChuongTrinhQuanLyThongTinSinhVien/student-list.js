var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var Student = /** @class */ (function () {
    function Student(fullName, gender, birthday, email, phone) {
        this.fullName = '';
        this.gender = Gender.OTHER;
        this.email = '';
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
    return Student;
}());
var studentList = [];
studentList.push(new Student('Nguyễn Văn A', Gender.MALE, new Date('1990-06-19'), 'anguyen@gmail.com', '0123456789'));
function showStudent(student) {
    console.log(student);
}
studentList.forEach(showStudent);
