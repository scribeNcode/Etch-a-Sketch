// get the the container that wraps the whole divs 
let divWrapper = document.querySelector('.container');
let divsPerSides = 16
let numberOfSquareDivs = divsPerSides ** 2;

for(let i = 1; i <= numberOfSquareDivs; i++){
    const eachDivs = document.createElement('div');
    eachDivs.classList.add("eachDivs")
    divWrapper.appendChild(eachDivs)
}