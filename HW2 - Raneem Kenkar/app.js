
function addFun() {
    var inputValue = document.getElementById("myInput").value;  /* -------Get the text from the input filed  ---------*/

    const newH2 = document.createElement("h2");  /* -------Create h2 element ---------*/

    newH2.innerHTML = inputValue;  /*-----------------------Add the text to the h2 element-----------*/
    
    document.getElementById("thirdDiv").appendChild(newH2);  /*-----------------Append the h2 element to the third div ------------*/

}