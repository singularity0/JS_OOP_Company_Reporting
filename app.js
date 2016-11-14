import {ictX} from './src/models/ictX.js';
import {Company} from './src/models/company.js';
import {CompanyRegister} from 'src/services/company-register.js';
import {companies} from './company-data.js';

var ictCompany = new ictX();

var register = new CompanyRegister();
register.loadData(companies);


var ictCompany = new ictX();
ictCompany.subsidieries = register.subsidieries;

ictCompany.sorteSubsidieriesByName();

console.log(ictCompany.subsidieries);
