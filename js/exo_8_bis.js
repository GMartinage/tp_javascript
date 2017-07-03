var printForm = function() {
    var box = document.getElementById("box");
    box.innerHTML =
        "<p>Nom : </p>" + document.getElementById("lastname").value +
        "<p>Prénom : </p>" + document.getElementById("firstname").value +
        "<p>Sexe : </p>" + document.getElementById("gender").value +
        "<p>Âge : </p>" + document.getElementById("age").value +
        "<p>Adresse : </p>" + document.getElementById("address_1").value + " " + document.getElementById("address_2").value + " " + document.getElementById("address_2").value +
        "<p>Pseudo : </p>" + document.getElementById("pseudo").value +
        "<p>Mot de passe : </p>" + document.getElementById("password").value;
}