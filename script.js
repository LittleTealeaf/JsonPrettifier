
function displayError(text) {
    document.getElementById("error").innerHTML=text;
}

function prettifyJson(text) {
    if(text == "") {
        displayError("Please Enter JSON");
    } else {
        try {
            return JSON.stringify(JSON.parse(text),null,'  ');
        } catch(e) {
            displayError("Invalid JSON");
            return text;
        }
    }
}

function buttonPrettify() {
    displayError("");
    var json = document.getElementById("input").textContent;
    console.log(document.getElementById("input").innerHTML);
    document.getElementById("input").textContent = prettifyJson(json);
}

document.getElementById("prettify").onclick = buttonPrettify;