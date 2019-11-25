const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=40bf870c6988d9ae6b1b66761e3ea0fb&units=imperial';

fetch(apiURL)
  .then(
      (response) => response.json()
  )
  .then(
      (forecasts) => {
        //DEBUG:
let nextDate = new Date();
nextDate.setDate(nextDate.getDate() + );
let dateString = getDateString(nextDate);
let hourString = '18:00:00';
let counter = 1;

// loop through results
forecasts.list.forEach(
  (forecast) => {}