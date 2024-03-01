/**
* @name: Assignment1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
**/
let dataSet = [
    // Existing data...
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ],
    // New data...
    [ "Lara Flynn", "Product Manager", "New York", "4250", "2013/05/18", "$400,000" ],
    [ "Ethan Hunt", "Security Consultant", "Los Angeles", "6921", "2014/08/27", "$420,000" ],
    [ "Anna Smith", "HR Manager", "Chicago", "3529", "2015/10/10", "$150,000" ],
    [ "John Doe", "Senior Analyst", "Dallas", "1985", "2016/09/01", "$200,000" ]
];

let showData = (dataSet) => {
    let staffList = document.getElementById("staff-list");
    staffList.innerHTML = '';

    dataSet.forEach(function(employee) {
        let employeeDiv = document.createElement("div");
        employeeDiv.textContent = `${employee[0]} - ${employee[1]} - ${employee[2]} - ${employee[3]} - ${employee[4]} - ${employee[5]}`;
        staffList.appendChild(employeeDiv); 
    });
}

function sortByName(dataSet) {
    return dataSet.slice().sort(function(a, b) {
        return a[0].localeCompare(b[0]);
    });
}

function sortBySalary(dataSet) {
    return dataSet.slice().sort(function(a, b) {
        return parseInt(a[5].replace(/[$,]/g, '')) - parseInt(b[5].replace(/[$,]/g, ''));
    });
}

showData(dataSet);

document.getElementById('sort-by-name').addEventListener('click', function() {
    showData(sortByName(dataSet));
});

document.getElementById('sort-by-salary').addEventListener('click', function() {
    showData(sortBySalary(dataSet));
});
let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

document.getElementById('footer').innerHTML += " | Date: " + formattedDate;
;