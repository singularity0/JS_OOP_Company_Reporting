class Department{
    constructor(name, manager, employeesCount, shortageDueExpansion){
        this.name = name;
        this.manager = manager;
        this.employeesCount = employeesCount;
        this.shortageDueExpansion = shortageDueExpansion;
        this.activeProjects = [];
        this.technologiesStack = []; 
    }
}

export {Department}