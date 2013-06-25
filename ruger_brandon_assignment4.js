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



// Main Code

var convertNumber = getFormattedNumber(5.14234, 2);
console.log("When 5.14234 is formatted to 2 decimal places, the number is: " + convertNumber);

var stringToNumberConversion = convertStringtoNumber("52");
console.log("When the string \"52\" is converted to a number, the result is: " + stringToNumberConversion);
stringToNumberConversion = convertStringtoNumber("Hello");
console.log("When trying to convert the string \"Hello\" to a number, the result is: " + stringToNumberConversion);




