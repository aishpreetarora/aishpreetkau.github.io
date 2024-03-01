/**
* @name: Assignment1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
**/
setTimeout(function() {
    document.getElementById('picture').src = 'aish.jpg';
    document.getElementById('name').style.display = 'block'; // Show the picture name
    document.getElementById('name').style.paddingleft = '50%';
    document.getElementById('name').style.backgroundcolor='#333';
    document.getElementById('name').style.color='blue';
}, 10000);
var currentDate = new Date();


let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });


document.getElementById('footer').innerHTML += " | Date: " + formattedDate;