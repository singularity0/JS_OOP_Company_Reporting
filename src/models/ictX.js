import {Company} from './company.js'

class ictX extends Company{
    constructor(companyName, yearFounded, country){
        super('ICT Automatisering N.V.', 1978, 'NL')
        this.numberOfEmployees = 750;
    }

    sorteSubsidieriesByName(){
        var sorted = this.subsidieries.sort(function(x, y){
            // console.log(x.companyName);
            // console.log(y.companyName);
            
            return x.companyName > y.companyName;
        })
        return sorted;
    }
}

export {ictX}