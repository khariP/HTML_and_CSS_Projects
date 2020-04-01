function my_Dictionary() {
    var Players = {
        PG:"Point Guard",
        Height:"How Tall",
        Strength:"Handle",
        Weakness:"Defense",
        Weakness:"Defense",
        Age:5,
       
        delete Players.Weakness,
    
    }
    document.getElementById("Dictionary").innerHTML = Players.Weakness;
}