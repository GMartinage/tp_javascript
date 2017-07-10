var boxes = document.getElementById('boxes');
var boxColor = boxes.getElementsByTagName('div');

var allGreen = function() {

    var div = document.getElementsByTagName('div');

    for (i=0; i<div.length; i++) {

        div[i].style = 'background-color: green;';

    }
}

var redGoGreen = function() {

    var red = document.getElementsByClassName('red');

    for (i=0; i<red.length; i++) {

        red[i].style = 'background-color: green;';

    }
}

var blueGoGreen = function() {

    var blue = document.getElementsByClassName('blue');

    for (i=0; i<blue.length; i++) {

        blue[i].style = 'background-color: green;';

    }
}

var reset = function() {

    var div = document.getElementsByTagName('div');

    for (i=0; i<div.length; i++) {

        div[i].style = 'background-color: none;';

    }
}