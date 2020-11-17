let a, b, c;
let outputText;

function validate() {

    a = document.forms["input_form"]["hodnota-a"].value;
    b = document.forms["input_form"]["hodnota-b"].value;
    c = document.forms["input_form"]["hodnota-c"].value;

    if (a == 0) {
        outputText = "Hodnota <b>a</b> se nesmí rovnat nule!";
    } else if (isNaN(a)) {
        outputText = "<b>a</b> musí být číslo!";
    } else if (isNaN(b)) {
        outputText = "<b>b</b> musí být číslo!";
    } else if (isNaN(c)) {
        outputText = "<b>c</b> musí být číslo!";
    } else {
        let x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        let x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
        outputText = "Pro kvadratickou rovnici <b>" + (a == 1 ? "" : a) + "x\u00B2 + " + (b == 1 ? "" : b)
            + "x + " + c + " = 0</b>, se <b>x</b> může rovnat <b>" + x1 + "</b> nebo <b>" + x2 + "</b>.";
    }

    document.getElementById("output_text").innerHTML = outputText;
}