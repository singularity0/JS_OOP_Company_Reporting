function showTechnologiesInCompany(someDeptRegister){
    var strypesTechnologies = document.getElementById('strypes-technologies');
    strypesTechnologies.addEventListener('click', function(){
    dropPreviousReportContent();
    var table = document.createElement('table');
    table.appendChild(document.createElement('tr'));
        var lenghtDept = someDeptRegister.departments.length;
        for (var i = 0; i < lenghtDept; i+=1){ 
            var technologiesCount = someDeptRegister.departments[i].technologiesStack.length;           
            for (var j = 0; j < technologiesCount; j+=1){
                var tr = document.createElement('tr'); 
                var td = document.createElement('td');
                var text = document.createTextNode(someDeptRegister.departments[i].technologiesStack[j]);
                td.appendChild(text);
                td.style.border = '1px solid green';
                tr.appendChild(td);
                table.appendChild(tr);
            }
        }
        document.getElementById('result').appendChild(table);
    })
}

function showPortfolioSortByOwnership(company){
    var report = company.sortSubsidiariesByOwnershipReport();
    console.log(report);
}

function showCompaniesInPortfolio(companyParent){
    var ictReportButton = document.getElementById('ict-report');
    ictReportButton.addEventListener('click', function UL(){
    dropPreviousReportContent();
    var fragment = document.createDocumentFragment();
    var someUl = document.createElement('ul');
    companyParent.subsidieries.forEach(function(element) {
        var someLi = document.createElement('li');
        someLi.textContent = element.companyName;
        someUl.appendChild(someLi);
    });
    fragment.appendChild(someUl);
    document.getElementById('result').appendChild(fragment);
    })
}

function dropPreviousReportContent(){
    var resultDiv = document.getElementById('result');
    resultDiv.className = resultDiv.className.replace(/\bblink_me\b/, '');
    document.querySelectorAll('button + div').forEach(x => x.innerHTML = '');
}

function getNumberOfEmployees(someDeptRegister){
    var strypesEmployessCount = document.getElementById('strypes-empl');
    strypesEmployessCount.addEventListener('click', function(){
    dropPreviousReportContent();
    
    var getNumberOfEmployees = someDeptRegister.totalNumberOfEmployees();
    var text = document.createTextNode(getNumberOfEmployees);
    
    document.getElementById('result').appendChild(text);
    document.getElementById('result').className += 'blink_me';
    })
}

export {showTechnologiesInCompany, 
        showCompaniesInPortfolio, 
        getNumberOfEmployees, 
        showPortfolioSortByOwnership}

