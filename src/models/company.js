class Company{
    constructor(
            companyName, 
            yearFounded, 
            country,  
            numberOfEmployees,
            description,
            ownership){
        this.companyName = companyName;
        this.yearFounded = yearFounded;
        this.country = country;
        this.numberOfEmployees = numberOfEmployees;
        this.teams = [];
        this.description = description;
        this.ownership = ownership;
    }
}

export {Company}


