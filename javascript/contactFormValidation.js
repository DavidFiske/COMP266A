/* Created by: David Fiske on September 19, 2016
 *
 * Tutorials used to help create this program:
 *
 * Tutorial Spark - Regular Expression Form Validation:
 * http://www.tutorialspark.com/javascript/JavaScript_Regular_Expression_Form_Validation.php
 *
 * w3schools.com - JavaScript Forms:
 * http://www.w3schools.com/js/js_validation.asp
 *
 * w3schools.com - JavaScript RegExp Reference:
 * http://www.w3schools.com/jsref/jsref_obj_regexp.asp
 *
 * w3schools.com - HTML DOM innerHTML Property:
 * http://www.w3schools.com/jsref/prop_html_innerhtml.asp
 *******************************************************************************************/

window.onload = isValid(); // run main function when page loads

/* Main Function
 * Validate contact form by calling a separate function for each form field
 **************************************************************************/
function isValid(contactForm) {
	'use strict'; // Enable function-level strict mode

	if (!isValidName(contactForm)) { // call isValidName function
		return false;
	}

	if (!isValidEmail(contactForm)) { // call isValidEmail function
		return false;
	}

	if (!isValidMessage(contactForm)) { // call isValidMessage function
		return false;
	}

	else { // all of the functions passed the test and therefore user can continue
		return true;
	}

} // End of function isValid

/* Validate Name
 * Function to make sure there is a valid name
 *********************************************/
function isValidName(contactForm) {
	'use strict'; // Enable function-level strict mode

	/* Regular Expressions
	 * Set the function variables
	 * Assign correct regex to each variable
	 ***************************************/
	var alphaSpace = /^[a-zA-Z][a-zA-Z ]+$/;

	/* Name validation 1
	 * Make sure name is not empty or null
	 *************************************/
	if (contactForm.Name.value == "" || contactForm.Name.value == null) {
		 document.getElementById("errorMessage").innerHTML = "Please enter your name and click submit.";
		 return false;
	}

	/* Name Validation 2
	 * Make sure name only contains letters and spaces
	 * Make sure name doesn't start with a space
	 * Make sure name has at least two characters
	 **************************************************/
	if (!alphaSpace.test(contactForm.Name.value)) {
		contactForm.Name.value = ""; // Clear user input
		document.getElementById("errorMessage").innerHTML = "Please enter your real name and click submit.";
		return false;
	}

	/* Confirm Validation
	 * If no if-checks get triggered then isValidName must be true
	 **************************************************************/
	else {
		return true;
	}

} // End of function validateName

/* Validate Email
 * Function to make sure there is a valid email address
 ******************************************************/
function isValidEmail(contactForm) {
	'use strict'; // Enable function-level strict mode

	/* Regular Expressions
	 * Set the function variables
	 * Assign correct regex to each variable
	 ***************************************/
	var validEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

	/* Email validation 1
	 * Make sure email is not empty or null
	 *************************************/
	if (contactForm.Email.value == "" || contactForm.Email.value == null) {
		 document.getElementById("errorMessage").innerHTML = "Please enter your email address and click submit.";
		 return false;
	}

	/* Email Validation 2
	 * Make sure email address contains an at symbol
	 * Make sure email address contains at least one dot
	 * Make sure email address contains correct characters
	 * Make sure all the characters dots and at symbol are correctly placed
	 *******************************************************************/
	if (!validEmail.test(contactForm.Email.value)) {
		contactForm.Email.value = ""; // Clear user input
		document.getElementById("errorMessage").innerHTML = "Please enter a valid email address and click submit.";
		return false;
	}

	/* Confirm Validation
	 * If no if-checks get triggered then isValidEmail must be true
	 *********************************************************/
	else {
		return true;
	}

} // End of function validateEmail

/* Validate Name
 * Function to make sure there is a message
 ******************************************/
function isValidMessage(contactForm) {
	'use strict'; // Enable function-level strict mode

	/* Message Validation
	 * Make sure message field isnt empty
	 ************************************/
	if (contactForm.Message.value == "" || contactForm.Message.value == null) {
		document.getElementById("errorMessage").innerHTML = "Please leave a message and click submit.";
		return false;
	}

	/* Confirm Validation
	 * If no if-checks get triggered then isValidMessage must be true
	 ****************************************************************/
	else {
		return true;
	}

} // End of function validateMessage