// It will work very similarly to the findHalf() function shown above. What you need to do is 
// complete the following tasks:

// Define a parameter that will hold the value of the original number.
// Divide that number by 4
// Return the quartered number
// Store the returned number in a variable
// Plug that variable into the parenthesis for the console.log()
// When you run the code, you should see the answer in the console.

const quarterValue = (originalNumber) => {
    const quarteredNumber = originalNumber / 4 

    return quarteredNumber

}

// Invoke the function and store the return value
const result = quarterValue(100)

// Log the return value
console.log(result)

