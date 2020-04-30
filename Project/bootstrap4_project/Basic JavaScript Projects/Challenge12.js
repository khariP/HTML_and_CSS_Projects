
    var text = "";
    var i;  // this is a declaration that assignes i the value of 0
    for (i = 0; i < 10; i++) {
      if (i === 3) { break; }
      text += "The number is " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
