console.log("I know ALLLLLLL");
var d = new Date();
var y = d.getFullYear();
var e = document.getElementById('present');
e.innerHTML = d;

var userSign = document.getElementById("star");
var forecast = document.getElementById("future");
var fCast = function (){
  if (userSign.value === "virgo" || userSign.value === "Virgo"){
    forecast.innerHTML = "Yo, Virgo! Here are your lucky numbers: 1,2,3";
  } else if (userSign.value === "aries" || userSign.value === "Aries"){
    forecast.textContent = "Aries, don't play lotto! Save your $";
  } else if (userSign.value === "taurus" || userSign.value === "Taurus"){
    forecast.textContent = "Taurus, call your mother!";
  } else if (userSign.value === "gemini" || userSign.value === "Gemini"){
    forecast.textContent = "Dear Gemini, let go of your secrets.";
  } else if (userSign.value === "cancer" || userSign.value === "Cancer"){
    forecast.textContent = "Cancer test";
  } else if (userSign.value === "leo" || userSign.value === "Leo"){
    forecast.innerHTML = "Leo, take a nap and stay hydrated.";
  } else if (userSign.value === "scorpio" || userSign.value === "Scorpio"){
    forecast.textContent = "Scorpio, please chill.";
  } else if (userSign.value === "sagittarius" || userSign.value === "Sagittarius"){
    forecast.textContent = "Greetings Sagittarius, remind yourself that you are worthy of love.";
  } else if (userSign.value === "capricorn" || userSign.value === "Capricorn"){
    forecast.textContent = "Capricorn, live beyond this life.";
  } else if (userSign.value === "aquarius" || userSign.value === "Aquarius"){
    forecast.textContent = "Aquarius, fun and easy is best.";
  } else if (userSign.value === "libra" || userSign.value === "Libra"){
    forecast.textContent = "Libra, your journey is never over.";
  }else if (userSign.value === "pisces" || userSign.value === "Pisces"){
    forecast.textContent = "Pisces, don't eat that brownie.";
  }
   else {
    forecast.textContent = "You are out of this world!";
  }
}
userSign.addEventListener("input", fCast);
