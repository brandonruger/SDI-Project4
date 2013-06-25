//alert("JavaScript works!");

// Number Library

// Format a number to use a specific number of decimal places:

var numberToConvert;
var numberOfDecPlaces;

getFormattedNumber = function(numberToConvert, numberOfDecPlaces){
    var convertedNumber = numberToConvert.toFixed(numberOfDecPlaces);
    return convertedNumber;
    
};

// end format number function

// Given a string number, turn it into an actual number:

var stringNumber;

convertStringtoNumber = function(stringNumber){
    if (isNaN(stringNumber)) {
        console.log(stringNumber + " is not a number!");
    } else {
        var stringToInteger = parseInt(stringNumber);
    } return stringToInteger;
};
// end convert string to number function

// String Library

// Is the string a URL (Does it start with http:// or https://)?

var isStringAUrl = function(potentialURL){
    if (potentialURL.indexOf("http://") == 0) {
        return true;
    } else if (potentialURL.indexOf("https://") == 0) {
        return true;
    } else {
        return false;
    }
};

// end is the string a URL




// Main Code

var convertNumber = getFormattedNumber(5.14234, 2);
console.log("When 5.14234 is formatted to 2 decimal places, the number is: " + convertNumber);

var stringToNumberConversion = convertStringtoNumber("52");
console.log("When the string \"52\" is converted to a number, the result is: " + stringToNumberConversion);
stringToNumberConversion = convertStringtoNumber("Hello");
console.log("When trying to convert the string \"Hello\" to a number, the result is: " + stringToNumberConversion);

var checkIfStringIsURL = isStringAUrl("http://www.facebook.com");
console.log("It is " + checkIfStringIsURL + " that this is a URL.");
checkIfStringIsURL = isStringAUrl("https://www.google.com");
console.log("It is " + checkIfStringIsURL + " that this is a URL.");
checkIfStringIsURL = isStringAUrl("ww.ebay.com");
console.log("It is " + checkIfStringIsURL + " that this is a URL.");




