class Department{
    constructor(name, manager, employeesCount, location, shortageDueExpansion){
        this.name = name;
        this.manager = manager;
        this.employeesCount = employeesCount;
        this.projects = [];
        this.technologies = [];
        this.location = location;
        this.shortageDueExpansion = shortageDueExpansion; 
    }
}

export {Department}