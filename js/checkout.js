
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Glossary 
	const containsNumber = /\d/
		// the password must contain 6 letters, at least one number, one uppercase and one lowercase letter
	const validPassword= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/
	const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
		// phone with 9 numbers
	const validPhone = /^\d{9}$/


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAdress = document.getElementById("errorAddress");  
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");  


	
	// Validate fields entered by the user: name, phone, password, and email

	if( fName.value == '' || fName.value.length <3 || containsNumber.test(fName.value)){
		document.getElementById("errorName").innerHTML = `This field is required and must have, at least, 3 characters`
		errorName.style.color = "red"
		fName.style.borderColor = "red"
		error++;

	}
	if(fEmail.value == '' || validEmail.test(fEmail.value) == false){
		document.getElementById("errorEmail").innerHTML= `This field is required and must contain an '@' and have, at least, 3 characters`
		errorEmail.style.color = "red"
		fEmail.style.borderColor = "red"
		error++;

	}

	if( fAddress.value == '' || fAddress.value.length <3){
		document.getElementById("errorAddress").innerHTML= `This field is required and must have, at least, 3 characters`
		errorAdress.style.color = "red"
		fAddress.style.borderColor = "red"
		error++;

	}
	if(fLastN == '' || fLastN.value.length <3 || containsNumber.test(fLastN.value)){
		document.getElementById("errorLastN").innerHTML= `This field is required and must have, at least, 3 characters`
		errorLastN.style.color = "red"
		fLastN.style.borderColor = "red"
		error++;

	}

	if( fPassword == '' || validPassword.test(fPassword.value) == false) {
		document.getElementById("errorPassword").innerHTML= `Enter a correct password with 6 letters, at least one number, one uppercase and one lowercase letter`
		errorPassword.style.color = "red"
		fPassword.style.borderColor = "red"
		error++;

	}

	if( fPhone == '' || validPhone.test(fPhone.value) == false){
		document.getElementById("errorPhone").innerHTML= `Invalid phone number!! Must be 9 digits with no letters`
		errorPhone.style.color = "red"
		fPassword.style.borderColor = "red"
		error++;

	}

	if(error>0){
		alert("Error");
	}else{
		errorName.style.color = "green"
		fName.style.borderColor = "green"
		errorEmail.style.color = "green"
		fEmail.style.borderColor = "green"
		errorAdress.style.color = "green" // doesn't detect "Address"
		fAddress.style.borderColor = "green"
		errorLastN.style.color = "green"
		fLastN.style.borderColor = "green"
		errorPassword.style.color = "green"
		fPassword.style.borderColor = "green"
		errorPhone.style.color = "green"
		fPhone.style.borderColor = "green"
		document.getElementById("errorName").innerHTML= "Correct field"
		document.getElementById("errorEmail").innerHTML= "Correct field"
		document.getElementById("errorAddress").innerHTML= "Correct field"
		document.getElementById("errorLastN").innerHTML= "Correct field"
		document.getElementById("errorPassword").innerHTML= "Correct field"
		document.getElementById("errorPhone").innerHTML= "Correct field"

		alert("OK");
		

	}

}
