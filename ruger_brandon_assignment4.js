//alert("JavaScript works!");

// Brandon Ruger
// SDI 1306
// Project 4 - Creation of Library


var myLibrary = function(){

// Format a number to use a specific number of decimal places:

    var getFormattedNumber = function(numberToConvert, numberOfDecPlaces){
        var convertedNumber = numberToConvert.toFixed(numberOfDecPlaces);
        return convertedNumber;
    
    }; // end format number function


// Given a string number, turn it into an actual number:


    var convertStringToNumber = function(stringNumber){
        if (isNaN(stringNumber)) {
            console.log(stringNumber + " is not a number!");
        } else {
            var stringToInteger = parseInt(stringNumber);
        } return stringToInteger;
    }; // end convert string to number function


// Is the string a URL (Does it start with http:// or https://)?

    var isStringAUrl = function(potentialUrl){
        if (potentialUrl.indexOf("http://") == 0) {
            return true;
        } else if (potentialUrl.indexOf("https://") == 0) {
            return true;
        } else {
            return false;
        }
    }; // end is the string a URL
    
    
// Does a string follow a pattern like a phone number?

    var isStringAPhoneNum = function(string){
        if (isNaN(string.substr(0, 3))) {
            return false;
            if (isNaN(string.substr(4, 3))) {
                return false;
                if (isNaN(string.substr(8, 4))) {
                    return false;
                }
            }
            return false;
        } else {
                if (string.indexOf("-") == 3){
                    if (string.lastIndexOf("-") == 7) {
                        return true;
                    } else {
                        return false;
                    }
                }
        }
    }; // end does this string follow a phone number pattern function
    
    
// Does a string follow a pattern like an email address?

   var isStringAnEmailAdd = function(emailAddress){
        if (emailAddress.indexOf("@") != (-1)) {
            if (emailAddress.lastIndexOf("." === (emailAddress.length-4))) {
                if (emailAddress.lastIndexOf(".") != -1) {
                    return true;
            } else {
                return false;
            }
            }
   
        }
   };// end function to see if a string follows the pattern of an email address
   
   
// Title case a string
    
    var titleCaseAString = function(stringToChange){
        
        var stringToArray = stringToChange.split(" ");
        
        
        for (var i=0; i<stringToArray.length; i++) {
        var newString = stringToArray[i].substr(0, 1).toUpperCase() + stringToArray[i].substr(1).toLowerCase();
        var titleCaseString = newString.join;
        } return titleCaseString;
        
    }; // end title case function
    

    
    return {
        "getFormattedNumber": getFormattedNumber,
        "convertStringToNumber": convertStringToNumber,
        "isStringAUrl": isStringAUrl,
        "isStringAPhoneNum": isStringAPhoneNum,
        "isStringAnEmailAdd": isStringAnEmailAdd,
        "titleCaseAString": titleCaseAString
    }

};


// Main Code

var brandonsLibrary = new myLibrary();

console.log("When 5.14234 is formatted to 2 decimal places, the number is: " + brandonsLibrary.getFormattedNumber(5.14234, 2));

console.log("When the string \"52\" is converted to a number, the result is: " + brandonsLibrary.convertStringToNumber("52"));
console.log("When trying to convert the string \"Hello\" to a number, the result is: " + brandonsLibrary.convertStringToNumber("Hello"));

console.log("It is " + brandonsLibrary.isStringAUrl("http://www.facebook.com") + " that this is a URL.");
console.log("It is " + brandonsLibrary.isStringAUrl("https://www.google.com") + " that this is a URL.");
console.log("It is " + brandonsLibrary.isStringAUrl("ww.ebay.com") + " that this is a URL.");

console.log("It is " + brandonsLibrary.isStringAPhoneNum("727-735-1133") + " that this string follows the pattern of a phone number.");
console.log("It is " + brandonsLibrary.isStringAPhoneNum("72-735-13") + " that this string follows the pattern of a phone number.");

console.log("It is " + brandonsLibrary.isStringAnEmailAdd("bruger@fullsail.edu") + " that this string follows the pattern of an email address.");
console.log("It is " + brandonsLibrary.isStringAnEmailAdd("bruger@fullsail") + " that this string follows the pattern of an email address.");

console.log("If I title case the string, it should return a capital letter as the first letter in each word: " + brandonsLibrary.titleCaseAString("i hope this works"));




