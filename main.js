const text = document.getElementsByClassName("forma-display-stage");
let i;
for (i = 0; i < text.length; i++) {
    text[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        const body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
const right = document.getElementsByClassName("forma-display-stage-right")[0];
right.addEventListener("click", function() {
    this.classList.toggle("active");

    const bodyRight = this.previousElementSibling;
    if (bodyRight.style.display === "block") {
        bodyRight.style.display = "none";
    } else {
        bodyRight.style.display = "block";
    }
})
