let nameInput = document.getElementById("name");
let emailInput = document.querySelector("#email");
let titleInput = document.querySelector("#title");
let msgInput = document.querySelector("#msg");
let errorMsg = document.createElement("p");
errorMsg.style.display = "inline-block";
errorMsg.style.marginLeft = "15px";
errorMsg.style.verticalAlign = "top";
errorMsg.style.position = "relative";
errorMsg.style.bottom = "10px";
errorMsg.textContent = "";
let errorHost = document.querySelectorAll("form div");
//name validation function
function validateName(){
    let namePattern = /\b[^\d\t\s]{4,}( [^\d\t\s]+)?\.?$/i;
    let nameResult = namePattern.test(nameInput.value);
    errorHost[0].appendChild(errorMsg);
    if(nameResult == false){
        errorMsg.textContent = "Your input must have at least four characters";
        errorMsg.style.color = "red";
    }
    else{
        errorMsg.textContent = "correct input format";
        errorMsg.style.color = "green";
    }
}
nameInput.addEventListener("blur", validateName);
//email validation function
function validateEmail(){
    let emailPattern = /\b\w+@{1}\w+\.{1}([^.\d\t\s]{2,3})/i;
    let emailResult = emailPattern.test(emailInput.value);
    errorHost[1].appendChild(errorMsg);
    if(emailResult == false){
        errorMsg.textContent = "Your input is not in the correct format for email";
        errorMsg.style.color = "red";
    }
    else{
        errorMsg.textContent = "correct input format";
        errorMsg.style.color = "green";
    }
}
emailInput.addEventListener("blur", validateEmail);
//title validation function
function validateTitle(){
    let titlePattern = /\b\w+( \w+)*\b/i;
    let titleResult = titlePattern.test(titleInput.value);
    errorHost[2].appendChild(errorMsg);
    if(titleResult == false){
        errorMsg.textContent = "Your title is not in the correct format";
        errorMsg.style.color = "red";
    }
    else{
        errorMsg.textContent = "correct input format";
        errorMsg.style.color = "green";
    }
}
titleInput.addEventListener("blur", validateTitle);
//message validation function
msgInput.addEventListener("blur", (e)=>{
    let msgPattern = /(\w+( \w+)*n*){20,}/i;
    let msgResult = msgPattern.test(msgInput.value);
    errorHost[3].appendChild(errorMsg);
    if(msgResult == false){
        errorMsg.textContent = "Your input must have at least 20 characters";
        errorMsg.style.color = "red";
    }
    else{
        errorMsg.textContent = "correct input format";
        errorMsg.style.color = "green";
    }
});
/*msgInput.addEventListener("blur", validateMessage);
let emailBodyErrorMsg = document.createElement("p");
    emailBodyErrorMsg.style.display = "inline-block";
    emailBodyErrorMsg.style.marginLeft = "50px";
    emailBodyErrorMsg.style.verticalAlign = "top";
    emailBodyErrorMsg.textContent = "";
*/