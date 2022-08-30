// exports
// clearSortDisplay(debug = false)
// createBars(size, debug = false)
// wait (ms)


// Exported functions

export function clearSortDisplay(debug = false) {
    let bars = document.getElementsByClassName('bar');
    if (debug)
        console.table(bars);

    // iterate backwards to remove all elements
    for (let i = (bars.length - 1); i >= 0; i--) {
        bars[i].remove();
    }
}


export function createBars(size, debug = false) {
    clearSortDisplay();
    const arr = generateArray(size, debug);
    const sortContainer = document.getElementById('sort-container');
    if (debug)
        console.log(sortContainer);

    for (let i = 0; i < arr.length; i++) {
        const newBar = document.createElement("div");
        newBar.className = 'bar';
        //newBar.id = `${i}`;
        newBar.style.height = `${arr[i]}%`;
        // newBar.style.order = `${i + 1}`
        newBar.setAttribute('data-value', arr[i]);
        sortContainer.appendChild(newBar);
    }
}


export const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Internal functions

function generateArray(size, debug = false) {
    let arr = [];

    for (let i = 0; i < size; i++) {
        //get value between 1 < n < 99 for ease of display purposes
        arr.push(Math.floor(Math.random() * 99) + 1);
    }
    if (debug)
        console.table(arr);

    return arr;
}

