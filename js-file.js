document.body.onload = createDivs;
const input = 15;
let width = 600 / input;
console.log(width);
const container = document.getElementById("container");

function createDivs () {
    for (let i = 0; i < input * input; i++) {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "newDiv");
        newDiv.style.width = width + "px";
        newDiv.style.height = width + "px";
        container.appendChild(newDiv);
        console.log("creating thing");
        newDiv.addEventListener('pointerover', (e) => {
            e.target.style.background = 'cyan';
        });
    }
}


