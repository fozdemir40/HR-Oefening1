// Elementen toeveogen voor game element
let game = document.getElementsByTagName("game")[0]

function createChildElement(x) {
    game.appendChild(x)
}

function generateLocation() {

    //Randomize height and width between output and 0
    this.x = Math.floor(Math.random() * window.innerWidth);
    this.y = Math.floor(Math.random() * window.innerHeight);

}

function generateFishColor() {
    let color = Math.floor(Math.random() * 360);

    return color
}

for (i = 0; i < 100; i++) {
    //
    // vis element
    //

    let fishLocation = new generateLocation()
    let fish = document.createElement("fish")
    fish.style.transform = `translate(${fishLocation.x}px, ${fishLocation.y}px)`
    fish.style.filter = `hue-rotate(${generateFishColor()}deg)`
    createChildElement(fish)

    let bubbleLocation = new generateLocation()
    //
    // bubble element
    //
    let bubble = document.createElement("bubble")
    bubble.style.transform = `translate(${bubbleLocation.x}px, ${bubbleLocation.y}px)`
    createChildElement(bubble)

}