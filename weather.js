const API_KEY = "c5b558b69771ae47d4d4e5f7bef0d7df";
// const COORDS = 'coords';

// function getWeather(lat, log){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
// }

// function svaeCoords(coordsObj){
//     localStorage.setItem(COORDS, JSON.stringify(coordsObj));
// }

// function handleGeoSuccess(position){
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const coordsObj = {
//         latitude, longitude
//     };
//     svaeCoords(coordsObj);
//     getWeather(latitude, longitude);
// }

// function handleGeoError(){
//     console.log('Cant access geo location');
// }

// function askForCoords(){
//     navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
// }

// function loadCoords(){
//     const loadedCoords = localStorage.getItem(COORDS);
//     if (loadedCoords === null){
//         askForCoords();
//     } else{
//         const parseCoords = JSON.parse(loadedCoords);
//         getWeather(parseCoords.latitude, parseCoords.longitude);
//     }
// }

// function init(){
//     loadCoords();
// }

// init();


const COORDS = "coords";

function handleGeoSuccess(position){
    console.log(position);
}

function handleGeoError(){
    console.log('위치를 불러올 수 없습니다.');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else {
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();