var min = 0;
var sec = 0;
var msec = 0;

var timer = false;

function play() {
    if (!timer) {
        // event.innerHTML = 'Pause'
        timer = true
    } else {
        // event.innerHTML = `Play`;
        timer = false;
    }
    myFunc();
}

function pause() {
    if (timer) {
        // event.innerHTML = 'Pause'
        timer = false
    } else {
        // event.innerHTML = `Play`;
        timer = true;
    }
    myFunc();
}

function reset() {
    location.reload();
}

function myFunc() {
    if (timer == true) {
        msec = msec + 1;
        if (msec == 100) {
            sec = sec + 1;
            msec = 0;
        }
        if (sec == 60) {
            min = min + 1
            sec = 0;
        }

        var getMsec = msec
        var getSec = sec;
        var getMin = min;

        if (msec < 10) {
            getMsec = "0" + msec;
        }

        if (sec < 10) {
            getSec = "0" + sec;
        }

        if (min < 10) {
            getMin = "0" + min;
        }

        setTimeout("myFunc()", 10)

        document.getElementById("msec").innerHTML = getMsec;
        document.getElementById("sec").innerHTML = getSec;
        document.getElementById("min").innerHTML = getMin;
        document.getElementById("laps").innerHTML = "";
    }
}

// function lap() {
//     var li = document.createElement("li");
//     laps.innerHTML = getMin + getSec + getMsec;
//     laps.appendChild(li);
// }


// function lap() {
//     lapNow = min + " : " + sec + " : " + msec;
//     document.getElementById('laps').innerHTML += "<li>" + lapNow + "</li>"
// }


