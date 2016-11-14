import {ICT} from './src/models/ICT.js';
import {Company} from './src/models/company.js';
import {CompanyRegister} from 'src/services/company-register.js';
import {companies} from './company-data.js';
import {departmentInfo} from './department-data.js';
import {Department} from './src/models/department.js';
import {DepartmentRegister} from 'src/services/department-register.js';
import {showTechnologiesInCompany, showCompaniesInPortfolio, getNumberOfEmployees, showPortfolioSortByOwnership} from './controllers/button-controller.js'


var companyRegister = new CompanyRegister();  // new service for registering companies
companyRegister.loadData(companies);    // provide the service with data feed

var ictCompany = new ICT(); //new ICT company
ictCompany.subsidieries = companyRegister.subsidieries; //subsidieries copied from service
showCompaniesInPortfolio(ictCompany); //shows subsidiaries
showPortfolioSortByOwnership(ictCompany); //logs in the browsers console

var someDeptRegister = new DepartmentRegister();  // new service for registering departments
someDeptRegister.loadDepartmentData(departmentInfo); // provide the service with data feed
showTechnologiesInCompany(someDeptRegister);  //adds event for 'Show All Strypes Technologies' button
getNumberOfEmployees(someDeptRegister); //adds event for 'Strypes Company constributors-All' button

