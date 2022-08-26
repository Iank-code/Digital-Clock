const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampm = document.getElementById("ampm")

function digitalClock() {

    var dateTime = new Date()
    var h = dateTime.getHours();
    var m = dateTime.getMinutes();
    var s = dateTime.getSeconds();

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    if(h > 12){
        h = h-12;
        ampm = "PM"
    }

    setTimeout(()=>{
        digitalClock()
    },1000)
}

digitalClock();