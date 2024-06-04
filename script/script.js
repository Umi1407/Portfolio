
function showDisplay() {
    var gridElements = document.getElementsByClassName("grid-items2");
    var button = document.getElementById("button");
    for (var x = 0; x < gridElements.length; x++) {
        if (gridElements[x].style.display === "block") {
            gridElements[x].style.display = "none";
            button.innerHTML = "See more";
        } else {
            gridElements[x].style.display = "block";
            button.innerHTML = "See less";
        }
    }
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const toggleLightButton = document.getElementById('toggleButton');


toggleLightButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector("hr").classList.toggle('hrLine');
});
  

