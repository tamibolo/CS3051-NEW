const secretKey = "122333";
let input = "";

function onButtonClick (id) {
    input = input + id;

    if (input === secretKey){
        const closedDoorElement  = document.querySelector("#close");
        closedDoorElement.classList.remove("door-shown");
        closedDoorElement.classList.add("door-hidden");

        const openDoorElement = document.querySelector("#open");
        openDoorElement.classList.remove("door-hidden");
        openDoorElement.classList.add("door-shown");        
    }
} 
