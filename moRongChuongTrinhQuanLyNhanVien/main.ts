import {Employee} from "./Employee";
import {Gender} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let employee1 = new Employee('Đoàn Ngọc Duy', Gender.MALE, new Date('1994-05-04'), 'duy.bk109@gmail.com', '0123456789');
let employee2 = new Employee('Đoàn Hùng Dũng', Gender.MALE, new Date('1992-08-21'), 'dung.neu@gmail.com', '0123356235');

let employeeManager = new EmployeeManager();
employeeManager.add(employee1);
employeeManager.add(employee2);

employeeManager.delete(1);
console.log(employeeManager.getList());