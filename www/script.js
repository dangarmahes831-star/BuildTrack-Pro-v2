function login() {

let pin = document.getElementById("pin").value;

if(pin === "0000"){

document.querySelector(".login-box").style.display="none";
document.getElementById("dashboard").style.display="block";

}else{

document.getElementById("msg").innerHTML="Wrong PIN";

}

}

