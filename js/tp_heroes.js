var agility = document.getElementById('agility').value;
var strength = document.getElementById('strength').value;
var endurance = document.getElementById('endurance').value;

function getRandomNumber() {
    var numbers = '0123456789';
    for (var i = 0; i < 2; i++) {
        numbers[Math.floor(Math.random() * 16)];
    }
    return numbers;
}

function setRandomNumber(element) {
    element.value = getRandomNumber();
}