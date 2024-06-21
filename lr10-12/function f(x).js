function f(x) {
    try {
        if (x >= 7) {
            return -x * x;
        } else {
            if (x == 3 || x == -3) {
                throw new Error("Division by zero error");
            }
            return Math.pow(2, x) / (x * x - 9);
        }
    } catch (error) {
        alert(error.message);
        return null;
    }
}

function calculate() {
    const inputX = document.getElementById('inputX').value;
    const x = parseFloat(inputX);

    if (isNaN(x)) {
        alert("Please enter a valid number");
        return;
    }

    const result = f(x);
    const resultElement = document.getElementById('result');

    if (result !== null) {
        resultElement.textContent = `При x = ${x}, значение y = ${result}`;
    } else {
        resultElement.textContent = `При x = ${x}, значение y = undefined due to an error`;
    }
}
