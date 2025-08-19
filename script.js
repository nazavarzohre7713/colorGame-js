var hand = document.getElementById("hand");
var btn = document.querySelectorAll(".button-86");
var body = document.querySelector("body");
var messages = document.getElementById("message");
var rest = document.getElementById("rest");

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let targetColor;
let targetIndex;


function setGame() {
    body.style.backgroundColor = "#fff";
    messages.innerHTML = "";

    targetColor = randomColor();
    targetIndex = Math.floor(Math.random() * btn.length);

    hand.style.color = targetColor;

    btn.forEach((button, index) => {
        if (targetIndex === index) {
            button.textContent = targetColor;
        } else {
            button.textContent = randomColor();
        }


        button.style.setProperty("--btn-bg", "#28282d");
    });
}


setGame();


btn.forEach((button, index) => {
    button.addEventListener("click", () => {
        let textbutton = button.textContent;
        if (textbutton == targetColor) {
            body.style.backgroundColor = "green";
            button.style.setProperty("--btn-bg", targetColor);
            messages.innerHTML = "very good";
        } else {
            body.style.backgroundColor = "red";
            button.style.setProperty("--btn-bg", "red");
            messages.innerHTML = "try again";
        }
    });
});


rest.addEventListener("click", setGame);
