let max;
 
// Function to find maximum
// integer possible by
// doing at-most K swap
// operations on its digits
function findMaximumNum(str,k)
{
 
    // Return if no swaps left
  if (k == 0)
    return;
  
  let n = str.length;
  
  // Consider every digit
  for (let i = 0; i < n - 1; i++)
  {
   
    // Compare it with all digits
    // after it
    for (let j = i + 1; j < n; j++)
    {
      // if digit at position i
      // is less than digit
      // at position j, swap it
      // and check for maximum
      // number so far and recurse
      // for remaining swaps
      if (str[i] < str[j])
      {
       
        // swap str[i] with
        // str[j]
        let t = str[i];
        str[i] = str[j];
        str[j] = t;
  
        // If current num is more
        // than maximum so far
        if ((str).join("")>(max) )
          max = (str).join("");
  
        // recurse of the other
        // k - 1 swaps
        findMaximumNum(str, k - 1);
  
        // Backtrack
        let c = str[i];
        str[i] = str[j];
        str[j] = c;
      }
    }
  }
}
 
// Driver code
let str = "512";
let k = 10;
max = str;
findMaximumNum(str.split(""), k);
console.log(max);