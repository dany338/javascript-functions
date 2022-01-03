// Javascript program for the above approach
 
// Function to find the maximum value
// of N after inserting the digit K
function maximizeNumber(N, K)
{
 
    // Convert it into N to string
    let s = String(N);
    let L = s.length;
 
    // Stores the maximum value of N
    // after inserting K
    let result = [];
    let i = 0;
 
    // Iterate till all digits that
    // are not less than K
    while ((i < L) && (K <= (s[i].charCodeAt(0) - '0'.charCodeAt(0)))) {
 
        // Add the current digit to
        // the string result
        result.push(s[i]);
        ++i;
    }
 
    // Add digit 'K' to result
    result.push(String.fromCharCode(K + '0'.charCodeAt(0)));
 
    // Iterate through all remaining
    // characters
    while (i < L) {
 
        // Add current digit to result
        result.push(s[i]);
        ++i;
    }
 
    // Print the maximum number formed
    console.log(result.join(""));
}
 
// Driver Code
let N = 512, K = 10;
maximizeNumber(N, K);