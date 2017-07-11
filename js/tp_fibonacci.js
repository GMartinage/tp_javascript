result = localStorage.getItem("résultat");
console.log(localStorage.getItem("résultat"));

var reset = function() {
  document.getElementById("result").innerHTML = " ";
}

var fibonacci = function()
{
  var nbre = document.getElementById("nbre").value;

  var nb_1 = 0, nb_2 = 1;

  for(var i = 0; i < nbre; i++)
  {

    reset();

    var result = nb_1 + nb_2;

    localStorage.setItem("résultat", result);
    console.log(result);

    nb_1 = nb_2;
    nb_2 = result;

    document.getElementById("result").innerHTML += result + "<br />";
    
  }
  
}