function getTemp(mood){

let base;
let msg;

if(mood === "happy"){
base = rand(100,110);
msg = "Enjoy your drink!";
}
else if(mood === "sad"){
base = rand(120,130);
msg = "Hope you feel better!";
}
else if(mood === "bored"){
base = rand(110,120);
msg = "Have some fun with your drink!";
}
else if(mood === "tired"){
base = rand(120,130);
msg = "Hope you get some rest after your drink!";
}

let decimal = rand(1,9)/10;
let temp = base + decimal;

document.getElementById("result").innerText =
"Optimal temperature is " + temp + "°F\n" + msg;

}

function rand(min,max){
return Math.floor(Math.random()*(max-min+1))+min;
}