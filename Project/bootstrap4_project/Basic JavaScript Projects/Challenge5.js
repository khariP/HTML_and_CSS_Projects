function my_Function() {
    document.getElementById("test").innerHTML = isNaN('This is a string');
    document.getElementById("test2").innerHTML = isNaN('This is a string');
    document.getElementById("test3").innerHTML = isNaN('007');
    document.getElementById("test4").innerHTML = 0/0;
    document.write(-3E310);
    document.write(2E310);
    document.write(10>2);
    document.write(10<2);
    document.write("10"+5);
    document.write(10==10);
    document.write(3==11);
    var x = 10;
    var y = 10;
    document.write(x===y);
    var x = 82;
    var y = "82";
    document.write(x===y);
    var A = "Dogs";
    var B = "Dogs";
    document.write(A===B);
    var A =  "Dogs";
    var B =  "Dogs";
    document.write(A===B);
    document.write(5 > 2 && 10 > 4);
    document.write(5 > 10 && 2 > 4);
    document.write(5 > 2 || 10 > 4);
    document.write(5 > 10 || 2 > 4);
    
    document.getElementById("test5").Console.log(2+2);
    document.getElementById("test5").Console.log(false);

}

