const container = document.getElementById("container");
const squares_num = 1050
const colors = ["blue", "white", "yellow", "grey", "green", "purple", "red", "orange"]

for(let i = 0; i < squares_num; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseout", () => removeColor(square))

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color
}

function removeColor(element) {
    element.style.background = "rgb(31, 30, 30)";
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}