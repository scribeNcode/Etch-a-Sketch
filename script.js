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
            // gererate three random numbers each between 1-225 for rgb backgroundColor
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            eachDivs.style.backgroundColor = `rgb(${red},${green},${blue})`;
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
    // ----------------Logic to Set the limit for the user input to a maximum of 100.-------------
    if(userNumberOfDivs > 100){
    // remove default 16 divs
    divWrapper.innerHTML = ''
    // create a p tag to display error message
    let errorMessageDiv = document.createElement('p');
    errorMessageDiv.textContent = 'You can only create between 1-100 number of squares per side' 
    divWrapper.appendChild(errorMessageDiv)
    }else{
            // change the numbers of divs on the website to the user's desired number 
    numberOfSquareDivs = userNumberOfDivs ** 2
     // remove default 16 divs
     divWrapper.innerHTML = ''
    //  get numbers of divs per side given by the user through input
     divsPerSides = userNumberOfDivs
     setDivs(divsPerSides)
    }

}) 
