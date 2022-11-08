enum Gender {
    MALE,
    FEMALE,
    OTHER
}
class Student {
    fullName: string ='';
    gender: Gender = Gender.OTHER;
    birthday?: Date;
    email: string ='';
    phone: string;
    constructor(fullName: string, gender: Gender, birthday: Date, email: string, phone: string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
}
let studentList: Student[] = [];

studentList.push(new Student('Nguyễn Văn A', Gender.MALE, new Date('1990-06-19'), 'anguyen@gmail.com', '0123456789'));

function showStudent (student: Student) {
    console.log(student);
}

studentList.forEach(showStudent);