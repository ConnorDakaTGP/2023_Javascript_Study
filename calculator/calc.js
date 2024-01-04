//setup access to HTML Elements
const buttons=document.querySelectorAll('button');
const display=document.querySelectorAll('.display');

//add event listeners
buttons.forEach(
    function (button){
        button.addEventListener("click", calculate);
    }
);

//calculate function - event handler for all buttons
function calculate(event){
    //what btn was clicked?
    const clickedValue = event.target.value;

    //check if equals
    if(clickedValue === "=") {
        //check if empty
        if (display.value !== "") {
            //evaluate
            display.value = eval(display.value);
        }
    }
    //check clear
    else if (clickedValue === "C"){
        //clear
        display.value="";
    }
    else{
        //Concatenate clicked value to display
        display.value += clickedValue;
    }
}