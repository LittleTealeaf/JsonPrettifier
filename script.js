
function displayError(text) {
    document.getElementById("error").innerHTML=text;
}

function prettifyJsonElement(element) {
    if(element.textContent == "") {
        displayError("Please Enter a JSON");
    } else {
        try {
            element.textContent = JSON.stringify(JSON.parse(element.textContent),null,'  ');
        } catch(exception) {
            displayError("Invalid JSON");
        }
    }
}

function buttonPrettify() {
    displayError("");
    prettifyJsonElement(document.getElementById("input"));
}

function buttonLoadFile() {
    var input = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange = e => {
        var file = e.target.files[0];
        readFile(file);
    }
}

function readFile(file) {
    var read = new FileReader();

    document.getElementById("input").innerHTML = "";

    read.readAsBinaryString(file);

    var text = "";
    
    read.onloadend = () => {
        document.getElementById("input").innerHTML += read.result;
    }
}

document.getElementById("prettify").onclick = buttonPrettify;
document.getElementById("loadFile").onclick = buttonLoadFile;