console.log("I know ALLLLLLL");
var d = new Date();
var y = d.getFullYear();
var e = document.getElementById('present');
e.innerHTML = d;

var userSign = document.getElementById("star");
var forecast = document.getElementById("future");
var fCast = function (){
  if (userSign.value === "virgo" || userSign.value === "Virgo"){
    forecast.innerHTML = "Here are your lucky numbers: 1,2,3";
  } else if (userSign.value === "aries" || userSign.value === "Aries"){
    forecast.textContent = "Don't play lotto! Save your $";
  } else if (userSign.value === "taurus" || userSign.value === "Taurus"){
    forecast.textContent = "Taurus test";
  } else if (userSign.value === "gemini" || userSign.value === "Gemini"){
    forecast.textContent = "Gemini test";
  } else if (userSign.value === "cancer" || userSign.value === "Cancer"){
    forecast.textContent = "Cancer test";
  } else if (userSign.value === "leo" || userSign.value === "Leo"){
  forecast.innerHTML = "Gemini test";
}else if (userSign.value === "scorpio" || userSign.value === "Scorpio"){
    forecast.textContent = "Leo test";
  } else if (userSign.value === "sagitttarius" || userSign.value === "Sagitttarius"){
    forecast.textContent = "Sagittarius test";
  } else if (userSign.value === "capricorn" || userSign.value === "Capricorn"){
    forecast.textContent = "Capricorn test";
  } else if (userSign.value === "aquarius" || userSign.value === "Aquarius"){
    forecast.textContent = "Aquarius test";
  }  else {
    forecast.textContent = "You are out of this world!";
  }
}
userSign.addEventListener("input", fCast);
