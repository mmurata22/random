function myFunction1(){
    var x = Math.floor(Math.random() * 2);
    if (x === 0){
        document.getElementById("result").innerHTML = "Heads";
    } else {
        document.getElementById("result").innerHTML = "Tails";
    }
};