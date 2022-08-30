// exports:
// bubbleSort()

import { wait } from './utils.js'

export async function bubbleSort(debug = false) {
    let elements = document.getElementsByClassName('bar');
    let parent = document.getElementById('sort-container');
    let swapped = false;

    if(debug)
        var iter = 0;

    do {
        if(debug)
            iter++;

        swapped = false;
        for (let i = 0; i < elements.length - 1; i++) {
            let current = elements[i];
            let next = elements[i + 1];


            current.classList.add('active');
            //next.classList.add('compare');

            if(debug)
                console.log(`iter ${iter}: comparing i: ${i}: ${current.getAttribute('data-value')} and i+1: ${i+1}: ${next.getAttribute('data-value')}`);

            if (parseInt(current.getAttribute('data-value')) > parseInt(next.getAttribute('data-value'))) {

                if(debug)
                    console.log (`Swapping`);

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

}


//internal functions
async function swapElements(parent, base, insert) {
    parent.insertBefore(insert, base);
    await wait(interval);
}

