<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Switch case with DOM</title>
</head>
<body>
    <h2>Select an option</h2>
    <select id="mySelect">
        <option value="">--Choose--</option>
        <option value="apple">apple</option>
        <option value="mango">mango</option>
        <option value="banana">banana</option>
    </select>
    <button onclick="myFruits()"> Check </button>

     <p id="result"></p>

    <script src="./index.js"></script>
</body>
</html>
<script>
  

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
</script>
