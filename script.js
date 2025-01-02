// get the the container that wraps the whole divs 
let divWrapper = document.querySelector('.container');
let divsPerSides = 16
let numberOfSquareDivs = divsPerSides ** 2;



// ----------------- a  function used to set default 16 by 16 divs -----------------
function setDivs(sides){
    for(let i = 1; i <= numberOfSquareDivs; i++){
        const eachDivs = document.createElement('div');
        eachDivs.classList.add("eachDivs");
            eachDivs.style.flexBasis = `calc(100% / ${numberOfSquareDivs / sides}  )`;
            eachDivs.style.height = `calc(100% / ${numberOfSquareDivs / sides} )`;
            eachDivs.style.border = "1px solid red"
        // add eventlister to set background of div when mouser hover on it 
        eachDivs.addEventListener('mouseenter', ()=>{
            eachDivs.style.backgroundColor = "red";
        });
    
            // add eventlister to remove  of div background when mouser leaves the div 
        eachDivs.addEventListener('mouseleave', ()=>{
            eachDivs.style.backgroundColor = ""
        });
        divWrapper.appendChild(eachDivs)
    }
}
   
setDivs(divsPerSides)





//-------------------------------- chooseSquaresButton logic  ----------------------

// get button from Dom
let chooseSquaresButton = document.querySelector('#chooseSquaresButton');
// write function to determine the event chooseSquaresButton listens to
chooseSquaresButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let userNumberOfDivs = prompt('enter your desired number of squares per side');
    // change the numbers of divs on the website to the user's desired number 
    numberOfSquareDivs = userNumberOfDivs ** 2
     // remove default 16 divs
     divWrapper.innerHTML = ''
    //  get numbers of divs per side given by the user through input
     divsPerSides = userNumberOfDivs
     setDivs(divsPerSides)
}) 
