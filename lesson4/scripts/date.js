var currentDate = new Date();
var outputDate;

var daysOfWeek = [
    'Sunday',
    'Monday', 
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var dayOfWeekNumber = currentDate.getDay();

outputDate = daysOfWeek[dayOfWeekNumber] + ', ';

outputDate += currentDate.getDate();

//TODO: get month string


//TODO: get full year

document.getElementById("currentDate").innerHTML = outputDate;




console.log(currentDate);
console.log(dayOfWeekNumber);
console.log(outputDate);
