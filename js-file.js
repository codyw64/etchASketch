document.body.onload = createDivs;

let currentColour = "red";
let input = 4;
const container = document.getElementById("container");

function createDivs () {
    clearGrid();
    let width = 600 / input;
    for (let i = 0; i < input **2; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "newDiv");
        newDiv.style.width = width + "px";
        newDiv.style.height = width + "px";
        container.appendChild(newDiv);
        newDiv.addEventListener('pointerover', (e) => {
            if (currentColour == "Rainbow") {
                let rainColour = "#" + Math.floor(Math.random()*16777215).toString(16);
                e.target.style.background = rainColour;
            } else {
                e.target.style.background = currentColour;
            }
        });
    }
}
function getInput() {
    if (document.getElementById("mySelect").value < 100) {
        input = document.getElementById("mySelect").value;
    } else {
        input = 4;
    }
    createDivs();
}
function clearGrid() {
    let element = document.getElementById("container");
        while (element.firstChild) {
        element.removeChild(element.firstChild);
}
}
function changeColour() {
    if (document.getElementById("colourChoice").value == "Random") {
        currentColour = "#" + Math.floor(Math.random()*16777215).toString(16);
    } else {
    currentColour = document.getElementById("colourChoice").value;
    }
}

