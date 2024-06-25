import { useEffect, useState } from "react";


function TitleSection(){
  return (
    <section class="text-center container">
      <div class="p-2 mb-2 bg-body-secondary text-end">25th June 2024</div>
      <h2 class="fw-light">10001st Prime</h2>
      <p class="lead text-body-secondary">
      By listing the first six prime numbers: 1, 2, 3, 5, 7, 11 and 13, we can see that the 6th prime is 11.
      <br />
      What is the 10000st prime number?</p>
    </section>
  );
}

export default function TenThousandsFirstPrime (){
  const[result, setResult] = useState([]);
  const[isLoading, setLoading] = useState(true);

  function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  function findPrimeNumbers(maxNumber){
    var primeNumbers = [];
    for (let number = 2; number < maxNumber; number++) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
      if(primeNumbers.length === 10001){
        console.log("All found.");
        break;
      }
    }
    console.log(`found ${primeNumbers.length} primes`);
    return primeNumbers;
  }
  
  useEffect(() => {
    //Runs only on the first render. 
    setTimeout(() => {
      var allPrimeNumbers = findPrimeNumbers(1000000);
      setResult(allPrimeNumbers[allPrimeNumbers.length-1]);
      setLoading(false);
    }, 100);
  }, []);


  return (
    <div>
      <TitleSection />

      <br/>
      <div class="spinner-border spinner-border-sm" role="status" style={{display : isLoading ? "block" : "none"}}>
        <span class="visually-hidden">Loading...</span>
      </div>
      <p><strong>{result}</strong></p>
    </div>
  );
}