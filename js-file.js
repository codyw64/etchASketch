document.body.onload = createDivs;

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
            e.target.style.background = 'red';
        });
    }
}
function getInput() {
    if (document.getElementById("mySelect").value) {
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

