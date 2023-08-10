

function typeOfTriangle(event) {
    event.preventDefault();

    const side1 = parseFloat(document.querySelector("input#side1").value);
    const side2 = parseFloat(document.querySelector("input#side2").value);
    const side3 = parseFloat(document.querySelector("input#side3").value);

    let triangle;
    if (side1 === side2 && side1 === side3) {
        triangle = "Equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        triangle = "Isosceles";
    } else {
        triangle = "Scalene";
    }

    document.getElementById("output").innerText = triangle;
}

window. addEventListener("load", function() {
    const form = document.getElementById("triangle-sides");
    form.addEventListener("submit", typeOfTriangle);
});