$.ajax({
    method: "get",
    url: "https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid=ecbafc8bc682243cadc5b7330751bcef&units=imperial"
})

    .then(function(response){
        console.log(response)
        $('.aboutMe').append(`<p class="temperature"><a href="https://www.weather.gov/" target="blank">My current weather is ${response.main.temp}°. Click here to find out yours!</a></p>`)
    })