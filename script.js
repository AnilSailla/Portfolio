
// for highlighting my name on mouseover
var headings = document.getElementsByClassName("big-text");
function increaseSize() {
    this.style.fontSize = "5rem"; 
    this.style.transition= "font-size 0.5s ease-in-out";
}

function resetSize() {
    this.style.fontSize = "4.5rem";  

}

// Add event listeners to each h1 element
for (var i = 0; i < headings.length; i++) {
    headings[i].addEventListener("mouseover", increaseSize);
    headings[i].addEventListener("mouseout", resetSize);
}
