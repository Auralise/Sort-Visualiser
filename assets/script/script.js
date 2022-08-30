import {clearSortDisplay, createBars} from './utils.js';
import {bubbleSort} from './bubble.js';


//execute script
clearSortDisplay();


createBars(100); // Generate n bars on screen

var interval = 10; // interval wait time in ms
var bubbleSortBtn = document.querySelector('#bubble');
bubbleSortBtn.addEventListener('click', bubbleSort);

var resetBtn = document.querySelector('#reset');
resetBtn.addEventListener("click", () => (createBars(100)));