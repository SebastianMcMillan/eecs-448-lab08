function change(){
    var borderRed = document.getElementById("borderR").value;
    var borderGreen = document.getElementById("borderG").value;
    var borderBlue = document.getElementById("borderB").value;
    var borderWidth = document.getElementById("borderW").value;

    var backgroundRed = document.getElementById("bgR").value;
    var backgroundGreen = document.getElementById("bgG").value;
    var backgroundBlue = document.getElementById("bgB").value;

    document.getElementById("cool").style.borderColor = ["rgb(", borderRed, ",", borderGreen, ",", borderBlue, ")"].join("");
    document.getElementById("cool").style.borderWidth = borderWidth;
    document.getElementById("cool").style.backgroundColor = ["rgb(", backgroundRed, ",", backgroundGreen, ",", backgroundBlue, ")"].join("");
}