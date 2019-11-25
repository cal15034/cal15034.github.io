const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=40bf870c6988d9ae6b1b66761e3ea0fb&units=imperial';

fetch(apiURL)
  .then(
      (response) => response.json()
  )
  .then(
      (currentWeather) => {
        //DEBUG:
        console.log(currentWeather);

        let currentTemp = currentWeather.main.temp;
        let currentImageIcon = currentWeather.weather[0].icon;
        let currentImage = 'https://openweathermap.org/img/w/' +
                            currentImageIcon +
                            'png';

        document.querySelectorAll('#current-temp')
        .textContent = currentTemp;

        document.querySelector('#current-temp')

      }
  );