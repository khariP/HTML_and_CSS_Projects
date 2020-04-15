function Dogs(Make, Breed, Color) {
    this.Dog_Make = Make;
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
}
var Jack = new Dogs("Big Dog", "Cane Corso","Brindle");
var Emily = new Dogs("Small", "Shih Tszu", "White and Black");
var Erik = new Dogs("Medium", "German Sheppard", "Brown");  
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "This Dog is a " + Emily.Dog_Color + "-colored " + Emily.Dog_Make +
    " "+ Emily.Dog_Breed;
    }