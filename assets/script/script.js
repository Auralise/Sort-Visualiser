

function generateArray(size) {
    let arr = [];

    for (let i = 0; i < size; i++) {
        //get value between 1 < n < 99 for ease of display purposes
        arr.push(Math.floor(Math.random() * 999) + 1);
    }

    //console.table(data.arr);

    return arr;
}


function clearSortDisplay() {
    let bars = document.getElementsByClassName('bar');
    //console.table(bars);
    // iterate from the end of the array to avoid problems with array length
    
    for (let i = (bars.length - 1); i >= 0; i--) {
        bars[i].remove();
    }
}


function createBars(arr) {
    const sortContainer = document.getElementById('sort-container');
    //console.log(sortContainer);
    for (let i = 0; i < arr.length; i++) {
        const newBar = document.createElement("div");
        newBar.className = 'bar';
        newBar.id = `${i}`;
        newBar.style.height = `${arr[i] / 10}%`;
        // newBar.style.order = `${i + 1}`
        newBar.setAttribute('data-value', arr[i]);
        sortContainer.appendChild(newBar);
    }
}



async function bubbleSort() {

    let elements = document.getElementsByClassName('bar');
    let parent = document.getElementById('sort-container');
    let swapped = false;

    //let iter = 0; //Debug counter

    // wait function 
    //const wait = (ms) => new Promise(resolve => setTimeout(resolve,ms));


    do {
        if (abort === true) {
            break;
        }
        
        // iter++; //Debug Counter
        swapped = false;
        for (let i = 0; i < elements.length - 1; i++) {
            //Check for abort state
            if (abort === true) {
                break;
            }

            let current = elements[i];
            let next = elements[i + 1];


            current.classList.add('active');
            //next.classList.add('compare');

            //console.log(`iter ${iter}: comparing i: ${i}: ${current.getAttribute('data-value')} and i+1: ${i+1}: ${next.getAttribute('data-value')}`);

            if (parseFloat(current.getAttribute('data-value')) > parseFloat(next.getAttribute('data-value'))) {

                //console.log (`Swapping`);

                //swap in array
                let temp = elements[i + 1];
                elements[i + 1] = elements[i];
                elements[i] = temp;

                await swapElements(parent, current, next);
                swapped = true;
            }
            else {
                await wait(interval);
            }

            current.classList.remove('active');
            //next.classList.remove('compare');

        }
    } while (swapped)
    
    //cancel abort state
    abort = false;
}

async function swapElements(parent, base, insert) {
    parent.insertBefore(insert, base);
    await wait(interval);
}


const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//globals
var barNum = 100; //array size
var interval = 10; // interval wait time in ms
var abort = false;


//execute script
clearSortDisplay();
//console.table(randomSet);
createBars(generateArray(barNum)); // Generate an array of size n and use to create bars on the screen

var bubbleSortBtn = document.querySelector('#bubble');
bubbleSortBtn.addEventListener("click", bubbleSort);

var resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    abort = true;
    wait(100);
    clearSortDisplay();
    createBars(generateArray(barNum));
})