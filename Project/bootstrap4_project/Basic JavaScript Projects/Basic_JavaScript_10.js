function count_to_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;

}

function myFunction() {
  var str = "Greatest Dogs";
  var n = str.length;
  document.getElementById("demo").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is "  +
        Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The color of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.color;

}

var x = 82;
document.write(x);
{
    let x = 33;
    document.write("<br>" + x);
}
document.write("<br>" + x);

var x = 82;
document.write(x);
{
    var x = 33;
    document.write("<br>" + x);
}
document.write("<br>" + X);

function myFunction() {
    return Math.PI;
  }
  document.getElementById("demo").innerHTML = myFunction();


  function car_description() {
      car_description.make = "Dodge ";
      car_description.model ="Viper ";
      car_description.year = "2021 ";
      car_description.color = "red ";
      document.getElementById("Car_Object").innerHTML = car_description + "The car is a " +
      this.year + this.color + this.make + this.model;
      
    }

      