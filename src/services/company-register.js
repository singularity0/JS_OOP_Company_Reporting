import {Company} from '../../src/models/company.js';

class CompanyRegister{
    constructor(){
        this.subsidieries = []
    }

    loadData(companies){
        for(let companiesItem of companies){
            let company = new Company(companiesItem.name, companiesItem.yearFounded, companiesItem.countryOfRegistration)
            this.subsidieries.push(company);
        }
    }
}

export {CompanyRegister}
