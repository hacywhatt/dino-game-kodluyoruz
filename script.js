const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var counter=0;


function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        }, 300)
    }

}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
      );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        cactus.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        cactus.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/100);
    }


}, 10)

document.addEventListener("keydown", function(event){
    jump();
});