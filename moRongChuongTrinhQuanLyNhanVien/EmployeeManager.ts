import {Employee} from "./Employee";

export class EmployeeManager {
    employeeList: Employee[] = [];
    constructor() {
    }
    add (employee: Employee): void {
        this.employeeList.push(employee);
    }
    getList (): Employee[] {
        return this.employeeList;
    }
    delete (index: number) {
            this.employeeList.splice(index,1);
    }
}