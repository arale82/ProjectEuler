import { useEffect, useState } from "react";
import TitleSection from "./templates/TitleSection";

export default function SummationOfPrimes (){
  const[result, setResult] = useState([]);
  const[isLoading, setLoading] = useState(true);

  function sieveOfEratosthenes(n){
    // Create a boolean array 
    // "prime[0..n]" and
    // initialize all entries 
    // it as true. A value in
    // prime[i] will finally be 
    // false if i is Not a
    // prime, else true.
    var prime = Array.from({length: n+1}, (_, i) => true);
 
    for (var p = 2; p * p <= n; p++) {
      // If prime[p] is not changed, then it is a
      // prime
      if (prime[p] == true) {
        // Update all multiples of p
        for (var i = p * p; i <= n; i += p)
          prime[i] = false;
      }
  }
  return prime;
}
  
  useEffect(() => {
    //Runs only on the first render. 
    setTimeout(() => {
      var maxNum = 2000000;
      var primeNumbers = sieveOfEratosthenes(maxNum);
      var sum = 0;
      // Print all prime numbers
      for (var i = 2; i <= maxNum; i++){
        if (primeNumbers[i] == true)
          sum += i;
      }
      setResult(sum);
      setLoading(false);
    }, 100);
  }, []);


  return (
    <div>
      <TitleSection
        date="1st July 2024"
        title="Summation of Primes"
        text="The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
        Find the sum of all the primes below two million."
      />

      <br/>
      <div class="spinner-border spinner-border-sm" role="status" style={{display : isLoading ? "block" : "none"}}>
        <span class="visually-hidden">Loading...</span>
      </div>
      <p><strong>{result}</strong></p>
    </div>
  );
}