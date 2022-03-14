const open_popup = function () {
    document.getElementById("popup").style.display = "initial";
    document.getElementById("header").style.display = "none";
}
setTimeout(open_popup, 2000);
document.getElementById("close_popup").addEventListener('click', function () {
    document.getElementById("popup").style.display = "none";
    document.getElementById("header").style.display = "block";
})

const json_value = function (res) {
    return res.json();
}
const handle_data = function (weather) {

    console.log(weather);
    console.log(weather.main.temp);
    console.log(weather.wind.speed);
    console.log(weather.weather[0].description);
    console.log(weather.weather[0].id);
    let celcius = Math.round(((weather.main.temp) - 273));
    let max_cel = Math.round(((weather.main.temp_max) - 273));
    let min_cel = Math.round(((weather.main.temp_min) - 273));

    const parent_container = document.getElementById("parent-container");
    parent_container.innerHTML = '';
    const div_el = document.createElement("div");
    const first_ele = document.createElement("p");
    const second_ele = document.createElement("p");
    const third_ele = document.createElement("p");
    const fourth_ele = document.createElement("p");
    const fift_ele = document.createElement("p");
    const six_ele = document.createElement("p");
    const image = document.createElement("img");
    first_ele.innerText = `City-${weather.name}`;
    first_ele.style.textAlign = "center";
    second_ele.innerText = `Tempareture :- ${celcius}\u00B0 C`;
    third_ele.innerText = `Wind Speed :- ${weather.wind.speed}`;
    fourth_ele.innerText = `Maximum Tempareture :- ${max_cel}\u00B0 C`;
    fift_ele.innerHTML = `Minimum Tempareture :- ${min_cel}\u00B0 C`;
    six_ele.innerHTML = `Precipitation & Precipitation & Sky Condition :- ${weather.weather[0].description}`;

    if (weather.weather[0].id < 250 && weather.weather[0].id >= 200) {
        image.src = "https://openweathermap.org/img/wn/11d@2x.png";
    }
    else if (weather.weather[0].id < 322 && weather.weather[0].id >= 300) {
        image.src = "https://openweathermap.org/img/wn/09d@2x.png";
    }
    else if (weather.weather[0].id < 532 && weather.weather[0].id >= 500) {
        image.src = "https://openweathermap.org/img/wn/10d@2x.png";
    }
    else if (weather.weather[0].id < 623 && weather.weather[0].id >= 600) {
        image.src = "https://openweathermap.org/img/wn/13d@2x.png";
    }
    else if (weather.weather[0].id < 782 && weather.weather[0].id <= 701) {
        image.src = "https://openweathermap.org/img/wn/50d@2x.png";
    }
    else if (weather.weather[0].id == 800) {
        image.src = "https://openweathermap.org/img/wn/01d@2x.png";
    }
    else if (weather.weather[0].id < 805 && weather.weather[0].id >= 701) {
        image.src = "https://openweathermap.org/img/wn/02d@2x.png";
    }

    div_el.classList.add("weather-card");
    div_el.appendChild(first_ele);
    div_el.appendChild(second_ele);
    div_el.appendChild(third_ele);
    div_el.appendChild(fourth_ele);
    div_el.appendChild(fift_ele);
    div_el.appendChild(six_ele);
    div_el.appendChild(image);

    parent_container.appendChild(div_el);
    document.getElementById("default").classList.add("hide");
}

const fetch_Api = function () {
    const search_value = search_feild.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(handle_data);
}

document.getElementById("search_button").addEventListener('click', fetch_Api);
const enter_fn = function (e) {
    if (e.key == 'Enter') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(handle_data);
    }
}

document.getElementById("search_feild").addEventListener('keyup', enter_fn);

const location_lat = function (weather) {
    console.log(weather);

    document.getElementById("popup").style.display = "none";
    document.getElementById("header").style.display = "block";
    let celcius = Math.round(((weather.main.temp) - 273));
    let max_cel = Math.round(((weather.main.temp_max) - 273));
    let min_cel = Math.round(((weather.main.temp_min) - 273));

    const parent_container = document.getElementById("default");
    parent_container.innerHTML = '';
    const div_el = document.createElement("div");
    const first_ele = document.createElement("p");
    const second_ele = document.createElement("p");
    const third_ele = document.createElement("p");
    const fourth_ele = document.createElement("p");
    const fift_ele = document.createElement("p");
    const six_ele = document.createElement("p");
    const image = document.createElement("img");
    first_ele.innerText = `City-${weather.name}`;
    first_ele.style.textAlign = "center";
    second_ele.innerText = `Tempareture :- ${celcius}\u00B0 C`;
    third_ele.innerText = `Wind Speed :- ${weather.wind.speed}`;
    fourth_ele.innerText = `Maxium Tempareture :- ${max_cel}\u00B0 C`;
    fift_ele.innerHTML = `Minimum Tempareture :- ${min_cel}\u00B0 C`;
    six_ele.innerHTML = `Precipitation & Sky Condition :- ${weather.weather[0].description}`;

    if (weather.weather[0].id < 250 && weather.weather[0].id >= 200) {
        image.src = "https://openweathermap.org/img/wn/11d@2x.png";
    }
    else if (weather.weather[0].id < 322 && weather.weather[0].id >= 300) {
        image.src = "https://openweathermap.org/img/wn/09d@2x.png";
    }
    else if (weather.weather[0].id < 532 && weather.weather[0].id >= 500) {
        image.src = "https://openweathermap.org/img/wn/10d@2x.png";
    }
    else if (weather.weather[0].id < 623 && weather.weather[0].id >= 600) {
        image.src = "https://openweathermap.org/img/wn/13d@2x.png";
    }
    else if (weather.weather[0].id < 782 && weather.weather[0].id <= 701) {
        image.src = "https://openweathermap.org/img/wn/50d@2x.png";
    }
    else if (weather.weather[0].id == 800) {
        image.src = "https://openweathermap.org/img/wn/01d@2x.png";
    }
    else if (weather.weather[0].id < 805 && weather.weather[0].id >= 701) {
        image.src = "https://openweathermap.org/img/wn/02d@2x.png";
    }

    div_el.classList.add("weather-card");
    div_el.appendChild(first_ele);
    div_el.appendChild(second_ele);
    div_el.appendChild(third_ele);
    div_el.appendChild(fourth_ele);
    div_el.appendChild(fift_ele);
    div_el.appendChild(six_ele);
    div_el.appendChild(image);
    parent_container.appendChild(div_el);
}

const fetch_Location = function () {
    const loaction_value = document.getElementById("location_feild").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loaction_value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(location_lat);
}

const enter_location = function (e) {
    if (e.key == 'Enter') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(location_lat);
    }
}

document.getElementById("submit_button").addEventListener('click', fetch_Location);
document.getElementById("location_feild").addEventListener('keyup', enter_location);