// get the the container that wraps the whole divs 
let divWrapper = document.querySelector('.container');
let divsPerSides = 16
let numberOfSquareDivs = divsPerSides ** 2;

for(let i = 1; i <= numberOfSquareDivs; i++){
    const eachDivs = document.createElement('div');
    eachDivs.classList.add("eachDivs");
    // add eventlister to set background of div when mouser hover on it 
    eachDivs.addEventListener('mouseenter', ()=>{
        eachDivs.style.backgroundColor = "red"
    });

        // add eventlister to remove  of div background when mouser leaves the div 
    eachDivs.addEventListener('mouseleave', ()=>{
        eachDivs.style.backgroundColor = ""
    });
    divWrapper.appendChild(eachDivs)
}