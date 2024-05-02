document.addEventListener("DOMContentLoaded", function() {
    updateTime();
    updateLocation();
    setInterval(updateTime, 1000); // Actualizar la hora cada segundo
});

function updateTime() {
    var timeElement = document.getElementById('time');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Agregar un cero inicial si es necesario
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Formato de 12 horas
    var amPM = (hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 12 : hours;

    // Construir la cadena de tiempo
    var timeString = "La hora actual es:" + hours + ":" + minutes + ":" + seconds + " " + amPM;
    timeElement.textContent = timeString;
}

function updateLocation() {
    var locationElement = document.getElementById('location');
    // Obtener la ubicación actual del navegador del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            locationElement.textContent = "Usted esta ubicado en: Latitud: " + latitude + ", y, Longitud: " + longitude;
        });
    } else {
        locationElement.textContent = "Geolocation is not supported by this browser.";
    }
}
