document.addEventListener("DOMContentLoaded", () => {
    const colorButton = document.getElementById("colorButton");
    const colorBox = document.getElementById("colorBox");

    colorButton.addEventListener("click", () => {
        const currentColor = colorBox.style.backgroundColor;
        colorBox.style.backgroundColor = currentColor === 'red' ? 'blue' : 'red';
    });
});