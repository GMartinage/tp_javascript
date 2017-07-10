var nbre = document.getElementById("nbre").value;

var result = document.getElementById("result").innerHTML;

var min_nbre = 1;
var max_nbre = 20;
var nbre = function() {
  return nbre >= min_nbre && nbre <= max_nbre;
}

var fibonacci = function()
{
  var nb_1 = 0, nb_2 = 1;

  for(var i = 0; i < nbre; i++)
  {
    var result = nb_1 + nb_2;

    console.log(result);

    nb_1 = nb_2;
    nb_2 = result;
  }
}

fibonacci();