let saveEl = document.getElementById("save-el") //on click event listener 
let countEl = document.getElementById("count-el") //on click event listener
let count = 0 //starting position of the count when page loads

function increment() { //first function to increment on click 
    count += 1 //mathematic function neater way of writing count = count + 1
    countEl.innerText = count //to show the count on screen 
}

function save() {
    let countStr = count + " - " //to display the count and dash together in previous entries
    saveEl.textContent += countStr //to display incremented values when save is clicked, we dont use innertext because we want the space after colons from html to show
    countEl.textContent = 0 // to always show as 0 once we hit save, this needs to be 0
    count = 0 //to always start at 0, this needs to be 0
   
}


