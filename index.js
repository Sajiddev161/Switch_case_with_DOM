

function myFruits() {
    let fruit = document.getElementById("mySelect").value;
    let Result = document.getElementById("result");

    switch(fruit){
        case "apple":
            Result.innerHTML = "You selected an apple";
            break;
            
        case "banana":
            Result.innerHTML = "You selected a banana";
            break;
            
        case "mango":
            Result.innerHTML = "You selected a mango";
            break;
            
        default:
            Result.innerHTML = "You did not select any option";
    }
}