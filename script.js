const buttons = document.querySelectorAll(".bttn");
const display = document.getElementById("display");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            currentInput = "";
            display.value = "";
        } else if (value === "C") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString(); 
                display.value = currentInput;
            } catch (e) {
                display.value = "Error";
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

