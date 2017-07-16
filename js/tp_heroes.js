returnNbre = localStorage.getItem("yourHero");
console.log(localStorage.getItem("yourHero"));

var saveHero = function() {

    var name = document.getElementById('name').value;
    var agility = parseInt(document.getElementById('agility').value);
    var strength = parseInt(document.getElementById('strength').value);
    var endurance = parseInt(document.getElementById('endurance').value);
    var saved = document.getElementById('save');

    if(agility + strength + endurance === 100) {

        saved.innerHTML = "Your hero is saved";
        saved.style.color='green';
        var returnNbre = name + " " + agility + " " + strength + " " + endurance;

        localStorage.setItem("yourHero", returnNbre);
        console.log(returnNbre);

        newHero = document.getElementById('heroes').appendChild(document.createElement('div'));
        newHero.id = name;
        newHero.innerHTML = "Name : " + name + "<br />" +
            "Agility : " + agility + "<br />" +
            "Strength : " + strength + "<br />" +
            "Endurance : " + endurance;

    }
    else {
        saved.innerHTML = "You must have a total of 100.";
        saved.style.color='red';
    }

}