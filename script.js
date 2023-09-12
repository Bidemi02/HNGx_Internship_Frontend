
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var date = new Date();

function updateTime() {
  
    var date = new Date();
    var dayNumber = date.getDay();
    var dayName = days[dayNumber];
    var timestamp = date.getTime();

    var utcString = date.toUTCString();
    var parts = utcString.split(" ")
    document.getElementById("day").innerHTML = dayName;
    document.getElementById("timestamp").innerHTML = parts[4];
    document.getElementById("utc").innerHTML = parts[5];
  }
  updateTime();
  setInterval(updateTime, 1000);


