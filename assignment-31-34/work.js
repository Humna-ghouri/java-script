// 1.
// current DaTE
// var todayDate = new Date ()
// console.log (todayDate)


// // 2.
// var monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// // Get current month index (0-11)
// var currentMonthIndex = new Date().getMonth();

// // Get current month name from array
// var currentMonthName = monthNames[currentMonthIndex];

// // Alert the current month name
// alert("Current Month is:  "+ currentMonthName  );



// 3.
// var days = [
//        "Sunday" , "Monday" , "Tuesday" , "Wednesday" ,
//         "Thursday" , "Friday" , "Saturday"
// ];

// // Get Current Day Index (0-6)
// var currentdayIndex = new Date(). getDay() ;

// // get current day from array 
// var currentDaysName = days [currentdayIndex];

// // for getting first 3 alpha from array make slice 
// var firstThreeLatters = currentDaysName.slice(0,3)

// // now show allert for current day 
// alert("Today Is : " + firstThreeLatters);





// 4.

// var day = [
//     "Sunday" , "Monday" , "Tuesday" , "Wednesday" ,
//      "Thursday" , "Friday" , "Saturday"
// ];
// // Get Current Day Index (0-6)
// var currentdayIndex = new Date(). getDay() ;

// // // get current day from array 
//  var currentDayName = day [currentdayIndex];


// //  checking day name 
// if (currentDayName === "Saturday" || currentDayName === "Sunday" ) {
//     alert ("It's FUNDAY.")
// }
// else (
//     alert ("Today Is " + currentDayName + "NOT  A FUNDAY.")
// );



// // 5.
// var currentDate = new Date () .getDate()

// if ( currentDate < 16 ){
//     alert ("First Fifteen  Days Of The Month");
//     }

//     else {
//         alert ("Last Days Of The Month ")
//     };





// 6.
// Create a new Date object
// var myDate = new Date();

// // Get the current time in milliseconds since Jan 1, 1970
// var millisecondsSinceEpoch = myDate.getTime();

// // Convert milliseconds to minutes
// var minutesSinceEpoch = millisecondsSinceEpoch / (1000 * 60);

// // Display the result
// console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch)



// 7.
// var myDate = new Date ();

// var currentHours = myDate.getHours();

//  if (currentHours < 12 ){
//     alert ("It's Am")
//  }
//  else {
//     ("it's Pm")
//  }





// 8.
// var laterDate = new Date(2021, 0, 0);

//     // Set the date to the last day of December 2020
//     laterDate.setDate(0);

//     // Display the result
//     console.log("Last day of the last month of 2020:", laterDate.toDateString());



// 9.
// var ramadanStartDate = new Date ('2015-06-18')

// var currentDate = new Date () ;

// var differenceMs = currentDate - ramadanStartDate;

// var daysSinceramadanStart = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

// alert ("Number of days past 1st Ramadan (June 18 , 2015) : " + daysSinceramadanStart);




// // 10.
// var referenceDate = new Date ( '2023-01-01');

// var beginningOf2015 = new Date ('2015-01-01T00:00:00Z');

// var differenceMs = referenceDate - beginningOf2015;

// var secondsElapsed = Math.floor(differenceMs / 1000);

// document.write("<h2>Seconds elapsed since the reference date to the beginning of 2015:</h2>");
//     document.write("<p>" + secondsElapsed + " seconds</p>");




// 11.
// let currentDate = new Date ();

// let currentHours = currentDate.getHours();

// currentDate.setHours(currentHours + 1);
// console.log (currentDate)



// 12.
// let currentDate = new Date();

// // Step 2: Reset the date 100 years back
// currentDate.setFullYear(currentDate.getFullYear() - 100);

// // Step 3: Format the date for display
// let formattedDate = currentDate.toLocaleDateString();

// // Step 4: Display the date in an alert box
// alert(`Date 100 years back: ${formattedDate}`);




// 13.
// let age = prompt ("Please Enter your age:");

// let currentYear = new Date ( ). getFullYear();
// let birthYear = currentYear - age ;

// document.write(`Your birth year is ${birthYear}`);


// 14.
// Function to generate the K-Electric bill
// Function to generate the K-Electric bill




alert("sjiudajd");
function generateBill() {
    // Get inputs using prompt
    var customerName = prompt("Enter Customer Name:");
    var currentMonth = prompt("Enter Current Month:");
    var unitsConsumedStr = prompt("Enter Number of Units Consumed:");
    var chargesPerUnitStr = prompt("Enter Charges per Unit (PKR):");

    // Convert inputs to numbers
    var unitsConsumed = parseFloat(unitsConsumedStr);
    var chargesPerUnit = parseFloat(chargesPerUnitStr);

    // Validate inputs
    if (!customerName || !currentMonth || isNaN(unitsConsumed) || isNaN(chargesPerUnit)) {
        console.log('Invalid input. Please enter valid numbers.');
        return;
    }

    // Calculate amounts
    var netAmount = unitsConsumed * chargesPerUnit;
    var latePaymentSurcharge = netAmount * 0.05; // Assuming a late payment surcharge of 5% of net amount
    var grossAmount = netAmount + latePaymentSurcharge;

    // Round amounts to 2 decimal places
    netAmount = roundToTwoDecimalPlaces(netAmount);
    latePaymentSurcharge = roundToTwoDecimalPlaces(latePaymentSurcharge);
    grossAmount = roundToTwoDecimalPlaces(grossAmount);

    // Display the bill details using console.log
    console.log("Electricity Bill");
    console.log("Customer Name: " + customerName);
    console.log("Current Month: " + currentMonth);
    console.log("Number of Units: " + unitsConsumed.toFixed(2));
    console.log("Charges per Unit (PKR): " + chargesPerUnit.toFixed(2));
    console.log("Net Amount Payable (Within Due Date): " + netAmount.toFixed(2));
    console.log("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
    console.log("Gross Amount Payable (After Due Date): " + grossAmount.toFixed(2));
}

// Helper function to round a number to 2 decimal places
function roundToTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
}

// Example usage
generateBill();