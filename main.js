/*
 * Student Name: Carson Cooper  
 * Student ID: 040633387
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: 1  
 * Assignment: 3
 * Date Submitted: July 12, 2023 
 */

/* Source: https://linuxhint.com/javascript-regular-expression-email-validation/ */
/* isValidEmail function */
function isValidEmail(email) {
    if (typeof email !== 'string') {
      return false;
    }
  
    var emailPattern = /^[a-zA-Z][\w.-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return emailPattern.test(email);
  }

/* Test Cases */
console.log(isValidEmail("myEmail1@email.com")); // true
console.log(isValidEmail("my.Email1@e-mail.com")); // true
console.log(isValidEmail("myEmail1@email.c")); // false
console.log(isValidEmail("m@email1.com")); // false
console.log(isValidEmail(1)); // false
console.log(isValidEmail(true)); // false
console.log(isValidEmail("myEmail1@com")); // false
console.log(isValidEmail("my_Email1@e.com")); // true
console.log(isValidEmail("1m@email.com")); // false
console.log(isValidEmail("my!Email@email.com")); // false

/* Age of Majority */
/* Source: https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/ */
function isAgeOfMajority(birthYear, birthMonth, birthDay) {
    // Parameter validation
    if (typeof birthYear !== 'number' || birthYear < 1920 || birthYear > 2010) {
      return false;
    }
  
    if (typeof birthMonth !== 'number' || birthMonth < 1 || birthMonth > 12) {
      return false;
    }
  
    if (typeof birthDay !== 'number' || birthDay < 1 || birthDay > 31) {
      return false;
    }
  
    // Create a Date object for the current date
    const TODAY = new Date();
  
    // Create a Date object for the birthdate
    var birthdate = new Date(birthMonth + '/' + birthDay + '/' + birthYear);
  
    // Calculate the difference in milliseconds between TODAY and birthdate
    var differenceInMs = TODAY - birthdate;
  
    // Convert the difference to days 
    var differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
  
    // Check if the difference is greater than 6570 days (18 years)
    if (differenceInDays > 6570) {
      return true;
    } else {
      return false;
    }
  }
  
  /* Test Cases */  
console.log(isAgeOfMajority(2005,2,25)); // true – just old enough
console.log(isAgeOfMajority(1997,2,29)); // false – not a leap year
console.log(isAgeOfMajority(2008,5,1)); // false
console.log(isAgeOfMajority(2000,1,1)); // true
console.log(isAgeOfMajority(1980,12,31)); // true
console.log(isAgeOfMajority("1980","12",31)); // false – wrong data type in parameter
