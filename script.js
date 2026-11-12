//Selecting The Elements 

const container = document.querySelector(".container");
const gridsetter = document.querySelector("#btn");

//Implementing the function to display required number of boxes with approriate size
function generate(num) {


    container.textContent = "";//Clear the screen before drawing boxes

    // Generate boxes
    for (let i = 0; i < num * num; i++) {
        const div = document.createElement("div");
        div.classList.add("box");

        div.style.height = `${640/num}px`;
        div.style.width = `${640/num}px`;

        container.appendChild(div);
    }

    // Select newly created boxes
    const boxes = document.querySelectorAll(".box");

    // Add hover event
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "white";
        });
    });
}

generate(16); // Default 16 × 16 grid

gridsetter.addEventListener("click", () => {

    let a = parseInt(prompt("Enter the number of squares on each side (1-100):"));

    if (isNaN(a) || a < 1 || a > 100) {
        alert("The number of squares should be in the range 1-100");
        return;
    }

    generate(a);
});