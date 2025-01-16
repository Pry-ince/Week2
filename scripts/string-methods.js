var output = document.querySelector("p");
var myString = "Hello! How are you are?";
output.textContent = myString;

/* STEP 1: String Length */
output.textContent = myString.length;

/* STEP 2: Retrieving a Specific String Character */
// retrieving the specific character from the string
output.textContent = myString[7];
output.textContent = myString[0];
//not length only because it will be 23 and it is outside the whole string
output.textContent = myString[myString.length - 1];

/* STEP 3: Extracting Part of a String */
output.textContent = myString.indexOf("are");

//the value is not present so -1
output.textContent = myString.indexOf("is");

// Note - if the substring is not found within the string, indexOf() returns -1

// Note - if you don't specify where to end the slice, the method returns the rest of the string
output.textContent = myString.slice(8, 13);
output.textContent = myString.slice(8);

/* STEP 4: Changing Case */
output.textContent = myString.toUpperCase();
output.textContent = myString.toLowerCase();

/* STEP 5: Updating Parts of a String */
output.textContent = myString.replace("are", "is");

//replaces all are's
output.textContent = myString.replaceAll("are", "is");