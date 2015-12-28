$('document').ready(function() {

  getLocation();
  function getLocation(){
    $.get("http://ipinfo.io", function(location) {
      console.log(location);
      $('#city').append(location.city+', ').append(location.region);

      getWheather(location.loc, 'imperial');
    }, "jsonp")
  }

  function getWheather(location,units){
    lat = location.split(',')[0];
    lng = location.split(',')[1];

    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng+
                '&units='+ units+'&APPID=38150c022595a54a0b19b5b84ad0cab3';
    $.get(url, function(weather){
      $('.left').append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");

      $('.temp').prepend(weather.main.temp.toFixed(1));


      $('#wind').append(weather.wind.speed);
      $('#humidity').append(weather.main.humidity + ' %');
      $('#rain').append(((weather.hasOwnProperty(rain)) ? weather.rain['3h'] : '0') + ' %');

      $('.sunrise').append(weather.sys.sunrise);

    },'jsonp');
  }
})


function CelciumToFaringate(){
  var celcium = $('.temp').text().split(' ')[0];
  var tmp = Number(celcium) * (9/5) + 32;
  $('.temp').text(tmp.toFixed(1));
  $('.f').removeClass('current');
  $('.c').addClass('current');
}

function FaringateToCelcium(){
  var faringate = $('.temp').text().split(' ')[0];
  var tmp = (Number(faringate) - 32) * 5/9;
  $('.temp').text(tmp.toFixed(1));
   $('.c').removeClass('current');
  $('.f').addClass('current');
}

