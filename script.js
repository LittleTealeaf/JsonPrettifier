function prettifyJson(text) {
    try {
        var json = JSON.parse(text);
        return JSON.stringify(json);
    } catch(e) {
        return text;
    }
}

function onPrettify() {
    var json = document.getElementById("input").textContent;
    console.log(document.getElementById("input").innerHTML);
    document.getElementById("input").textContent = prettifyJson(json);
}

document.getElementById("prettifybutton").onclick = onPrettify;