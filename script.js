
function displayError(text) {
    document.getElementById("error").innerHTML=text;
}

function prettifyJsonElement(element) {
    if(element.textContent == "") {
        displayError("Please Enter a JSON");
    } else {
        try {
            element.innerHTML = JSON.stringify(JSON.parse(element.textContent),null,'  ');
        } catch(exception) {
            displayError("Invalid JSON");
        }
    }
}

function buttonPrettify() {
    displayError("");
    prettifyJsonElement(document.getElementById("input"));
}

document.getElementById("prettify").onclick = buttonPrettify;