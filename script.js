const inputValue = document.getElementById("user-input");

// Handle number button clicks
document.querySelectorAll(".numbers").forEach(item => {
    item.addEventListener("click", e => {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

// Handle operation button clicks
document.querySelectorAll(".operations").forEach(item => {
    item.addEventListener("click", e => {
        const operation = e.target.innerHTML.trim();
        const lastChar = inputValue.innerText.slice(-1);

        if (operation === "=") {
            try {
                inputValue.innerText = eval(inputValue.innerText);
            } catch {
                inputValue.innerText = "NaN";
            }
        } else if (operation === "AC") {
            inputValue.innerText = "0";
        } else if (operation === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
        } else if (operation === "%" && !isNaN(lastChar)) {
            inputValue.innerText += "%";
        } else if (operation === "x²" && !isNaN(lastChar)) {
            inputValue.innerText = Math.pow(parseFloat(inputValue.innerText), 2);
        } else if (operation === "√" && !isNaN(lastChar)) {
            inputValue.innerText = Math.sqrt(parseFloat(inputValue.innerText));
        } else if (["+", "-", "*", "/"].includes(operation) && !isNaN(lastChar)) {
            inputValue.innerText += operation;
        }
    });
});
