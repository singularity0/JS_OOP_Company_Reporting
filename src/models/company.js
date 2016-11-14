class Company{
    constructor(companyName, yearFounded, country){
        this.companyName = companyName;
        this.yearFounded = yearFounded;
        this.country = country;
        this.isSubsidiary = false;
        this.subsidieries = [];
        this.numberOfEmployees = null;
        this.teams = [];
    }
}

export {Company}