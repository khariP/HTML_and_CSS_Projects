function full_sentence() {
    var part_1 = "I have";
    var part_2 = "made this";
    var part_3 = "Into a complete";
    var part_4 = "Sentence.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;

}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML =Section;
}

function string_Method() {
    var x =182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var x =12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);

}