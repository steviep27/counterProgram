const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

// Keyboard support
window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowUp":
            count++;
            countLabel.textContent = count;
            break;
        case "ArrowDown":
            count--;
            countLabel.textContent = count;
            break;
        case "Enter":
            count = 0;
            countLabel.textContent = count;
            break;
    }
});
