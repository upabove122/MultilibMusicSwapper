/*jslint
plusplus: true,
*/
/*global
Audio, clearInterval, clearTimeout, document, event, FileReader, FormData, history, Image, location, name, navigator, Option, screen, sessionStorage, setInterval, setTimeout, Storage, XMLHttpRequest, alert, confirm, console, prompt
*/

var keys = [];
var audio = [];
var currentpress = false;
var selectedspeed = 10;
var playspeed = 10;

//set audio files
for (x = 5; x < 16; x++) {
    audio[x] = new Audio("TTlib/3-" + x + ".mp3");
}

window.addEventListener("keyup", function (e) {
    "use strict";
    delete keys[e.keyCode];
    currentpress = false;
}, false);

window.addEventListener("keydown", function (e) {
    "use strict";
    keys[e.keyCode] = true;
}, false);

/*
up - 38
down - 40
left - 37
right 39
space - 32
*/

function buttonpress() {
    "use strict";
    //ensure single press
    if (!currentpress) {
        //upkey
        if (keys[38]) {
            selectedspeed++;
            currentpress = true;
        }
        //downkey
        if (keys[40]) {
            selectedspeed--;
            currentpress = true;
        }
	}
	if (selectedspeed > 30) {
		selectedspeed = 30;
	} else if (selectedspeed < 5) {
		selectedspeed = 5;
	}
}


setInterval(function () {
    "use strict";
    console.log(selectedspeed + "+" + currentpress);
    buttonpress();
	if (playspeed !== selectedspeed) {
		audio[10].pause();
		playspeed = selectedspeed;
		audio[10].playbackRate = playspeed / 10;
		audio[10].play();
	}
}, 10);
audio[playspeed].playbackRate = playspeed / 10;
audio[playspeed].play();