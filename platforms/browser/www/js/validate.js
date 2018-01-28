var validation = {
	//validation object
		isValid: true,
		errorCount: 0,
		groupErrorCount: 0,
		checkIfNotEmpty: function(inputText) {
			if (inputText.length > 0) {
				return true;
			} else {
				return false;
			}
		},		
		validateEmail: function(inputText) {
			var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(inputText.match(emailFormat)) {
				return true;
			} else { 
				//console.log("You have entered an invalid email address!");
			return false;
			}
		},
		validatePassword: function(inputText) {
			// (?=.*\d) for at least one digit
			// (?=.*[a-zA-Z]) for at least one letter
			// (?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]) for at least one special character
			// {6,20} for 6-20 characters in length
			var passwordFormat = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,20}$/;
			if(inputText.match(passwordFormat)) {
				return true;
			} else { 
				//console.log("You have entered an invalid password!");
				return false;
			}
		},
		validateName: function(inputText) {
			// /[a-zA-Z ]+/ for alpha characters and spaces only
			// {2,50} for 2-50 characters in length
			//^[0-9]{4,6}$
			var nameFormat = /[a-zA-Z ]{2,50}$/;
			if(inputText.match(nameFormat)) {
				return true;
			} else { 
				//console.log("You have entered an invalid name!");
				return false;
			}
		},
		validate: function(elementID, validationType, returnIsValid) {
			this.isValid = true;
			this.errorCount = 0;
			var inputValue = document.getElementById(elementID).value;
			if (validationType == "email") {
				if (this.checkIfNotEmpty(inputValue)) {
					//console.log("Email contains something");
					if (!this.validateEmail(inputValue)) {
						//console.log("Email is NOT valid email");
						this.errorCount ++;
						this.displayError(elementID, "Please enter a valid email address (ex. jim@company.com)");
					} else { this.hideError(elementID)} //hide error message since it has validated
				} else {
					//console.log("Email field is empty");
					this.displayError(elementID, "Please enter your email address");
					this.errorCount ++;
				}
			} else if (validationType == "password") {
				if (this.checkIfNotEmpty(inputValue)) {
					//console.log("password contains something");
					if (!this.validatePassword(inputValue)) {
						//console.log("Password is NOT valid password");
						this.errorCount ++;
						this.displayError(elementID, "Your password must contain at least one number, uppercase letter, lowercase letter, a special character, and be 6-20 characters long.");
					} else { this.hideError(elementID)} //hide error message since it has validated
				} else {
					//console.log("Email field is empty");
					this.displayError(elementID, "Please enter your password");
					this.errorCount ++;
				}
			} else if (validationType == "name") {
				if (this.checkIfNotEmpty(inputValue)) {
					//console.log("name contains something");
					if (!this.validateName(inputValue)) {
						//console.log("Name is NOT a valid name");
						this.errorCount ++;
						this.displayError(elementID, "A name may only consist of letters and spaces and be 2-50 characters in length.");
					} else { this.hideError(elementID)} //hide error message since it has validated
				} else {
					//console.log("Email field is empty");
					this.displayError(elementID, "Name is required");
					this.errorCount ++;
				}
			} else if (validationType == "date") {
				if (!this.checkIfNotEmpty(inputValue)) {
					//console.log("A date field is empty");
					this.displayError(elementID, "Please make a selection");
					this.errorCount ++;
				} else { this.hideError(elementID)} //hide error message since it has validated
			} else {
				console.log("Unknown validation type: "+ validationType + ". Skipping validation on this field.");
				//this.errorCount ++;
			}
			
			if (this.errorCount > 0) { this.isValid = false; } else { this.isValid = true; }
			
			if (returnIsValid == true) { //optional parameter to return whether or not item is valid
				return this.isValid;
			}
			
		}, validateGroup: function(group, returnIsValid) {
			//key is ID and group[key] is validationType
			//ex. an array like {'emailfieldID':'email', 'passwordfieldID','password'}
			this.groupErrorCount = 0;
			
			for (var key in group) {
				if (!group.hasOwnProperty(key)) continue;
				this.validate(key,group[key]);
				this.groupErrorCount = this.groupErrorCount + this.errorCount;
				//console.log("["+key+"] => "+group[key]);
			}
			
			if (this.groupErrorCount > 0) { this.isValid = false; } else { this.isValid = true; }
			
			if (returnIsValid == true) { //optional parameter to return whether or not item is valid
				return this.isValid;
			}		

		}, displayError: function(elementID, errorText) {
			//Create a reference to the corresponding hidden error div as the <div> SIBLING of the element in question
			reference = $("#" + elementID).siblings('.errorBubble');
			//console.log($(reference).html());
			
			$(reference).html(errorText);
				if ($(reference).css('display') == "none") {
					$(reference).fadeIn();
				} else {
					//var initialColor = $(reference).css("background-color");
					var initialColor = "rgb(255, 189, 189)";
					$(reference)
					.animate({backgroundColor:'#FF6666'}, 100)
					.delay(100)
					.animate({backgroundColor:initialColor}, 100);
				}	
		
		}, hideError: function(elementID) {
			$("#" + elementID).siblings('.errorBubble').css('display','none');
		}, displayMessage: function(messageText) {
			$("#message span").html(messageText);
		
			if ($("#message").css('display') == "none") {
				$("#message").fadeIn();
			} else {
				var initialColor = $("#message").css("background-color");
				$("#message")
				.animate({backgroundColor:'#FF6666'}, 100)
				.delay(100)
				.animate({backgroundColor:initialColor}, 100);
			}	
		
	}
	};