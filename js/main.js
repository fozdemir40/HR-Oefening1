//
// bubble element
//
let bubble = document.createElement("bubble")
bubble.style.transform = "translate(20vw, 100vh)"


// Elementen toeveogen voor game element
let game = document.getElementsByTagName("game")[0]

function createChildElement(x) {
    game.appendChild(x)
}




function generateFishLocation() {
    //Get window size for height and width
    let width = screen.width;
    let height = screen.height;

    //Randomize height and width between output and 0
    this.x = Math.floor(Math.random() * width);
    this.y = Math.floor(Math.random() * height);

}

function generateFishColor(){
    let color = Math.floor(Math.random() * 360);

    return color
}





let fishLocation = new generateFishLocation()
console.log(`translate (${fishLocation.x}px, ${fishLocation.y}px)`)

//
// vis element
//
let fish = document.createElement("fish")
fish.style.transform = `translate(${fishLocation.x}px, ${fishLocation.y}px)`
fish.style.filter = `hue-rotate(${generateFishColor()}deg)`








createChildElement(fish)
createChildElement(bubble)