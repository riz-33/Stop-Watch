var min = 0;
var sec = 0;
var msec = 0;

var timer = false;

function play() {
    if (!timer) {
        play.innerHTML = 'Pause';
        timer = true;
    } else {
        play.innerHTML = `Play`;
        timer = false;
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

        var getSec = sec;
        var getMin = min;

        if (sec < 10) {
            getSec = "0" + sec;
        }
        if (min < 10) {
            getMin = "0" + min;
        }

        setTimeout("myFunc()", 10)

        document.getElementById("msec").innerHTML = msec;
        document.getElementById("sec").innerHTML = getSec;
        document.getElementById("min").innerHTML = getMin;
    }
}