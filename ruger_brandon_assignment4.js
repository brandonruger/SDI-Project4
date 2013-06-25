//alert("JavaScript works!");

// Number Library

// Format a number to use a specific number of decimal places

var numberToConvert;
var numberOfDecPlaces;

getFormattedNumber = function(numberToConvert, numberOfDecPlaces){
    var convertedNumber = numberToConvert.toFixed(numberOfDecPlaces);
    return convertedNumber;
    
};





// Main Code

var convertNumber = getFormattedNumber(5.14234, 2);
console.log("When 5.14234 is formatted to 2 decimal places, the number is: " + convertNumber);




