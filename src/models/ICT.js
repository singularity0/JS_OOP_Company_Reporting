import {Company} from './company.js'

class ICT extends Company{
    constructor(companyName, yearFounded, country){
        super('ICT Automatisering N.V.', 1978, 'NL', {ICT:100});
        this.numberOfEmployees = 750;
    }

    sortSubsidieriesByName(){
        var sorted = this.subsidieries.sort(function(x, y){ 
            return x.companyName > y.companyName;
        })
        return sorted;
    }

    sortSubsidiariesByOwnershipReport(){
        var sortedByOwnership = this.subsidieries.sort(function(x, y){
            return x.ownership.ICT > y.ownership.ICT;
        })

        var report = new Map();

        for(let item of sortedByOwnership){
            report.set(item.companyName, item.ownership.ICT);
        }
        
        return report;
    }
}

export {ICT}