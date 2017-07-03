var addition = function(parameter1, parameter2) {
    return parseInt(parameter1) + parseInt(parameter2);
}

var printMath = function() {
    var result = document.getElementById("myDivP");
    result.innerHTML =
    addition(document.getElementById("number_1").value, document.getElementById("number_2").value);
}