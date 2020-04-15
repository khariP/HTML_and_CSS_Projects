function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
function myFunction() {
document.getElementById("demo").innerHTML =
"My father is " + myFather.age + "."; 
}