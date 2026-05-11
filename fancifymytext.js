function makeBig(){
  //  alert("hello world");
    var textArea = document.getElementById("userText").style.fontSize = "24pt";
    textArea.style.fontSize = "50pt";
}

function changeStyle(){
    alert("style changed");
    var textArea = document.getElementById("userText");
    var fancy = document.getElementById("fancy");
    if(fancy.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }



}



function Mooify(){
    var textArea = document.getElementById("userText");
    var text = textArea.value.toUpperCase();
    var parts = text.split(".");
    textArea.value = parts.join("-MOO.");
}