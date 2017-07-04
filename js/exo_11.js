var fizzBuzz = document.getElementById("fizzbuzz");

for (var i = 1; i < 51; i++) {
    if(i%3==0) {
        console.log("Fizz");
        fizzBuzz.innerHTML += "Fizz" + "<br/>";
    }
    else if(i%5==0) {
        console.log("Buzz");
        fizzBuzz.innerHTML += "Buzz" + "<br />";
    }
    else {
        console.log(i);
        fizzBuzz.innerHTML += i + "<br />";
    }
}
