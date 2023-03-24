var i = 15;
var j = 10;
var total = i + j;

document.getElementById("p1").innerHTML ="Total=" + total;

// Exponentiation Operators
document.getElementById("p1").innerHTML += 2**3;





var user = {
    firstName: "vahid",
    lastName: "Desai"
}

document.getElementById("p3").innerHTML = `My name is ${user.firstName} ${user.lastName}.`;

function changeText() {
    document.getElementById("p4").innerHTML = "Hello from JS";
}

function sum(a,b) {
    return document.getElementById("p5").innerHTML = a+b;
}