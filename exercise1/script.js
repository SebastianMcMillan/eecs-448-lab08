function validate(){
    var password1 = document.getElementById("p1").value;
    var password2 = document.getElementById("p2").value;
    console.log(password1);
    console.log('\n');
    console.log(password2);
    if(password1.length < 8 || password2.length < 8)
        alert("One of the password fields is too short. Must be at least 8 characters long.")
    else if(password1 != password2)
        alert("Passwords Do Not Match!");
    else alert("Passwords Match!");
}