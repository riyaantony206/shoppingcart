function validateEmail() {
    var email = document.getElementById("email").value; 
    var errorMessage = document.getElementById("error-message");


  

    if (email === "") {
        errorMessage.innerHTML = "* Please enter your email.";
        return false; 
        
    }
    errorMessage.textContent = "";
    return true;

}