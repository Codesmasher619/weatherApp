
const apiKey='ea17c10d387634af2e3da68ed42837c7';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city){
           const response= await axios.get(apiUrl +city+`&appid=${apiKey}`);
           document.querySelector('.temp').innerHTML=Math.round(response.data.main.temp)+'°C';
           document.querySelector('.city').innerHTML=response.data.name;
           document.querySelector('.humidity').innerHTML=response.data.main.humidity+'%';
           document.querySelector('.wind').innerHTML=response.data.wind.speed+'km/h';
           console.log(response.data.weather)
           switch(response.data.weather[0].main)
           {
            case 'Clear':
                document.querySelector('.weather-icon').src='weather-app-img/images/clear.png';
                break;

            case 'Rain':
            document.querySelector('.weather-icon').src='weather-app-img/images/rain.png';
            break;

            case 'Haze'||'Smoke'||'Mist':
                document.querySelector('.weather-icon').src='weather-app-img/images/mist.png';
                break;

                case 'Snow':
                document.querySelector('.weather-icon').src='weather-app-img/images/snow.png';
                break;

                case 'Fog':
                document.querySelector('.weather-icon').src='weather-app-img/images/clouds.png';
                break;

                case 'Drizzle':
                document.querySelector('.weather-icon').src='weather-app-img/images/drizzle.png';
                break;

                default:
                document.querySelector('.weather-icon').src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Ferror-icon%2F&psig=AOvVaw1SokmswdsO0J6cdZEv84fr&ust=1703502145673000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMDawrn2p4MDFQAAAAAdAAAAABAE";
                break;
           }

           
}


const searchBox=document.querySelector('#query');
const searchBtn=document.querySelector('#searchButton');
searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
})

