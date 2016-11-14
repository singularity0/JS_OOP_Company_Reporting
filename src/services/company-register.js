import {Company} from '../../src/models/company.js';

class CompanyRegister{
    constructor(){
        this.subsidieries = [];
        this.errors = [];
    }

    loadData(companies){
        for(let companiesItem of companies){
            try {
                let company = new Company(
                `${companiesItem.name}`,
                companiesItem.yearFounded,
                `${companiesItem.countryOfRegistration}`,
                companiesItem.numberOfEmployees, 
                `${companiesItem.description}`,
                companiesItem.ownership,)
                this.subsidieries.push(company);
            } catch(e){
                this.errors.push(e)
            }
            
        }
        return this;
    }
}

export {CompanyRegister}





