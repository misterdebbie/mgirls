console.log("I know ALLLLLLL");
var d = new Date();
var y = d.getFullYear();
var e = document.getElementById('present');
e.innerHTML = d;

var userSign = document.getElementById("star");
var forecast = document.getElementById("future");
var fCast = function (){
  /*if (userSign.value === "virgo" || userSign.value === "Virgo"){
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
  }*/
  switch (userSign.value){
  case 'virgo':
  case 'Virgo':
  forecast.textContent = "Yo, Virgo! Here are your lucky numbers: 1,2,3";
  break;
  case 'leo':
  case 'Leo':
  forecast.textContent = "Leo, take a nap and stay hydrated";
  break;
  case 'aries':
  case 'Aries':
  forecast.textContent = "Aries, don't play lotto! Save your $";
  break;
  case 'taurus':
  case 'Taurus':
  forecast.textContent = "Taurus, I like my steak medium rare";
  break;
  case 'gemini':
  case 'Gemini':
  forecast.textContent = "Dear Gemini, let go of your secrets";
  break;
  case 'cancer':
  case 'Cancer':
  forecast.textContent = "Cancer, look around for opportunity";
  break;
  case 'scorpio':
  case 'Scorpio':
  forecast.textContent = "Scorpio, please chill.";
  break;
  case 'sagittarius':
  case 'Sagittarius':
  forecast.textContent = "Greetings Sagittarius, remind yourself that you are worthy of love";
  break;
  case 'capricorn':
  case 'Capricorn':
  forecast.textContent = "Capricorn, live beyond this life.";
  break;
  case 'aquarius':
  case 'Aquarius':
  forecast.textContent = "Aquarius, fun and easy is best";
  break;
  case 'libra':
  case 'Libra':
  forecast.textContent = "Libra, your journey is not over";
  break;
  case 'pisces':
  case 'Pisces':
  forecast.textContent = "Pisces, don't eat that brownie.";
  break;
  default:
  forecast.textContent = "You are out of this world!";
}
}
userSign.addEventListener("input", fCast);
