document.getElementById("imagesContainer").style.display="none";

let numbers = ["one", "two", "three", "four", "five", "six"]


function play(){

    document.getElementById("imagesContainer").style.display="";

    let dice= numbers.length;
    
    let dn = Math.floor(Math.random() * dice);
    
    document.getElementById("imagesContainer").innerHTML = numbers[dn];

    if(numbers[dn] == "one"){
        document.getElementById("imagesContainer").innerHTML = "<img src='images/1.png' width=75px>"
        }
    if(numbers[dn] == "two"){
        document.getElementById("imagesContainer").innerHTML = "<img src='images/2.png' width=75px>"
        }
    if(numbers[dn] == "three"){
        document.getElementById("imagesContainer").innerHTML = "<img src='images/3.png' width=75px>"
        }
    if(numbers[dn] == "four"){
        document.getElementById("imagesContainer").innerHTML = "<img src='images/4.png' width=75px>"
        }
    if(numbers[dn] == "five"){
        document.getElementById("imagesContainer").innerHTML = "<img src='images/5.png' width=75px>"
        }
    if(numbers[dn] == "six"){
        document.getElementById("imagesContainer").innerHTML = "<img src='images/6.png' width=75px>"
        }
}