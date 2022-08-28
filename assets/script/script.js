


function generateArray() {
    let data = {
        arr: [],
        isSorted: false,
    };

    for (let i = 0; i < 150; i++) {
        data.arr.push(Math.floor(Math.random() * 100) + 1);
    }

    //console.table(data.arr);

    return data;
}


function clearSortDisplay() {
    let bars = document.getElementsByClassName('bar');
    console.table(bars);
    // iterate from the end of the array to avoid problems with array length
    for (let i = (bars.length - 1); i >= 0; i--) {
        bars[i].remove();
    }
}


function createBars(arr) {
    const sortContainer = document.getElementById('sort-container');
    console.log(sortContainer);
    for (let i = 0; i < arr.length; i++) {
        const newBar = document.createElement("div");
        newBar.className = 'bar';
        newBar.id = `bar${i + 1}`;
        newBar.style.height = `${arr[i]}%`;
        sortContainer.appendChild(newBar);
    }
}


//execute script
clearSortDisplay();
let randomSet = generateArray();
//console.table(randomSet);
createBars(randomSet.arr);