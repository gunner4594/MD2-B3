"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employeeList = [];
    }
    EmployeeManager.prototype.add = function (employee) {
        this.employeeList.push(employee);
    };
    EmployeeManager.prototype.getList = function () {
        return this.employeeList;
    };
    // findEmployee (index: number) {
    //     let i = -1;
    //     this.employeeList.forEach((employee, index) => {
    //         if (employeeList[i] === index) {
    //             i = index;
    //         }
    //     })
    //     return i;
    // }
    EmployeeManager.prototype["delete"] = function (index) {
        this.employeeList.splice(index, 1);
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
