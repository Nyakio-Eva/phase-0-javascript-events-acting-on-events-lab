// Your code here
const dodger = document.getElementById("dodger");
//function to ensure the dodger's left edge doesn't zoom out of view when it reaches the left edge of it's container
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers,10);

    if(left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown",function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});
//function to move the dodger right
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers,10);

    const dodgerwidth = 40;
    //calculate rightedge as the maximum position to prevent dodger from escapping off the rightside
    const rightEdge = 360 - dodgerwidth; //game field is 400px by 400px // I got the 360 from the test
    //condition to ensure the dodger is moved to the right only if it hasn't reached the right edge yet
    if(left < rightEdge){
        dodger.style.left = `${left +1}px`;  
    }
}
document.addEventListener("keydown",function(e){
    if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
});

