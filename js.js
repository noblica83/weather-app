var input = document.querySelector(".input");
var city  = document.querySelector(".city_name");
var temperature = document.querySelector(".temperature");
var humidity = document.querySelector(".humidity");
var weather = document.querySelector(".weather"); 
var button = document.querySelector(".submit");
var icon = document.querySelector(".icon")

   button.addEventListener ('click', function(name){
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=eac9419af01c39ae28b094a1e74700af')
    .then (response => response.json())
    .then (data => {
      var tempValue = data['main']['temp'];
      var cityValue = data['name'];
      var weatherValue = data ['weather']['0']['description'];
      var humidityValue = data['main']['humidity'];
      var icon1 = data.weather[0].icon;
      const kel = 273;
  
      city.innerHTML = cityValue;
      weather.innerHTML = "Weather: "+ weatherValue;
      temperature.innerHTML =  Math.floor(data.main.temp - kel) + "°C";  
      icon.innerHTML = `<img src="https://openweathermap.org/img/w/${icon1}.png">`;
      humidity.innerHTML = "Humidity: "+ humidityValue + "%";            
    })
      .catch (err => alert("wrong city name!"));
    })
   