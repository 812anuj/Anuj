let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
// getElementById("count-el").innerText = count ;
// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let store = count +" -";
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    saveEl.innerText += store ;
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}


function reset(){
    count = 0;
    countEl.textContent = count;
}


// change .innerText to .textContent