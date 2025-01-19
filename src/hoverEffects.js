let myText = document.getElementById("head").innerHTML;

console.log(myText);
let wrapText = "";

for (let i = 0; i < myText.length; i++) {
  wrapText += "<em>" + myText.charAt(i) + "</em>";
}

document.getElementById("head").innerHTML = wrapText;
