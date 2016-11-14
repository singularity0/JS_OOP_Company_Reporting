import {Department} from '../models/department.js';

class DepartmentRegister{
    constructor(){
        this.departments = [];
    }

    loadDepartmentData(externalData){
        var data = externalData;

        for(let dept of data){
            var department = new Department(dept.name, dept.manager, dept.employeesInDepartment, dept.shortageDueExpansion);
            department.technologiesStack = dept.technologiesStack;
            department.activeProjects = dept.activeProjects;

            this.departments.push(department);
        }
       return this;
    }

    extractAllTechnologies(){
        var allTechs = [];
        this.departments.forEach(
            deptTechArray => (deptTechArray.technologiesStack.forEach(
            tech => allTechs.push(tech))))
        return allTechs;
    }

    totalNumberOfEmployees(){
        var total = this.departments.reduce(function(sum, x){           
            return sum + x.employeesCount;
        }, 0);
        var textString = `${total} happy empolyees in the company. Cheers!`;

        return textString;
    }
}

export {DepartmentRegister}
