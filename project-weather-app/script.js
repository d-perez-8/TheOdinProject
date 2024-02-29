const API_KEY = "79d519f703ba4979898234644242802";

const form = document.getElementById('form');
const inputLocation = document.getElementById('location')
const submitBtn = document.getElementById('submit');
const content = document.getElementById('content');

let currentLocation = {};

async function getCurrentWeather(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    const data = await response.json();

    currentLocation = {
        location: `${data.location.name}`,
        region: `${data.location.region}`,
        country: `${data.location.country}`,
        local_time: `${data.location.localtime}`,
        temp_f: `${data.current.temp_f}`,
        //temp_c: `${data.current.temp_c}`,
        condition: `${data.current.condition.text}`,
        icon: `${data.current.condition.icon}`,
    }

    return currentLocation;
}

// populate data onto DOM
async function updateContent() {
    await getCurrentWeather(inputLocation.value)
    content.innerHTML = '';
    content.innerHTML += `
        <div class="container">
            <p>City: ${currentLocation.location}</p>
            <p>Tempurature: ${currentLocation.temp_f} F</p>
            <p>Condition: ${currentLocation.condition}</p>
            <img src="${currentLocation.icon}"/>
            <p>Local Time: ${currentLocation.local_time}</p>
            <p>Region: ${currentLocation.region}</p>
            <p>Country: ${currentLocation.country}</p>
        </div>
    `
};

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    updateContent()
})