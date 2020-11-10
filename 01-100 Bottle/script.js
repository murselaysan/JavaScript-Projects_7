
let numberOfBottles = 99

function bottleFall (bottle){
    
    while (bottle >= 0) {
        var bottleWord = "bottle";
        if (bottle === 1) {
            bottleWord = "bottles";
        } 
        console.log(bottle + " " + bottleWord + " of milk on the wall");
        console.log("Take one down, pass it around,");
        //num = prompt('Kaç şişe düşecek?')
        //bottle = bottle - num;
        bottle--;
    }
}

console.log(bottleFall(numberOfBottles));

