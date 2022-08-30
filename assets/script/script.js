

function generateArray(size) {
    let arr = [];

    for (let i = 0; i < size; i++) {
        //get value between 1 < n < 99 for ease of display purposes
        arr.push(Math.floor(Math.random() * 99) + 1);
    }

    //console.table(data.arr);

    return arr;
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
        newBar.id = `${i}`;
        newBar.style.height = `${arr[i]}%`;
        // newBar.style.order = `${i + 1}`
        newBar.setAttribute('data-value', arr[i]);
        sortContainer.appendChild(newBar);
    }
}


async function  bubbleSort() {
    let elements = document.getElementsByClassName('bar');
    let parent = document.getElementById('sort-container');
    let swapped = false;

    let iter = 0;

    // wait function 
    //const wait = (ms) => new Promise(resolve => setTimeout(resolve,ms));


    do {
        iter++;
        swapped = false;
        for(let i = 0; i < elements.length - 1; i++)
        {
            let current = elements[i];
            let next = elements[i + 1];
            

            current.classList.add('active');
            //next.classList.add('compare');

            console.log(`iter ${iter}: comparing i: ${i}: ${current.getAttribute('data-value')} and i+1: ${i+1}: ${next.getAttribute('data-value')}`);
            
            if (parseInt(current.getAttribute('data-value')) > parseInt(next.getAttribute('data-value')) ){

               console.log (`Swapping`);
                
                //swap in array
                let temp = elements[i+1];
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

}

async function swapElements (parent, base, insert) {
    parent.insertBefore(insert, base);
    await wait(interval);
}


const wait = (ms) => new Promise(resolve => setTimeout(resolve,ms));


//execute script
clearSortDisplay();
let randomSet = generateArray(100); //generate an array of size n 
//console.table(randomSet);
createBars(randomSet);

var interval = 10; // interval wait time in ms
var bubbleSortBtn = document.querySelector('#bubble');
bubbleSortBtn.addEventListener("click", bubbleSort);