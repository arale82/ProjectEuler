import { useEffect, useState } from "react";


function TitleSection(){
  return (
    <section class="text-center container">
      <div class="p-2 mb-2 bg-body-secondary text-end">25th June 2024</div>
      <h2 class="fw-light">Smallest Multiple</h2>
      <p class="lead text-body-secondary">
      2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
      <br /><br />
      What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?</p>
    </section>
  );
}



export default function SmallestMultiple () {
  const[result, setResult] = useState();
  const[isLoading, setLoading] = useState(true);

  
  useEffect(() => {
    var maxNumber = 1000000000;
    var maxDivisor = 20;
    var counter = 10;
    //Runs only on the first render. 
    //Set a timeout so the other blocks can load first, then we can do the calculation.
    setTimeout(() => {
      var num = findSmallestMultiple(counter, maxNumber, maxDivisor);
      setResult(num);
      setLoading(false);
    }, 100);
  }, []);


  function findSmallestMultiple(counter, maxNumber, maxDivisor) {
    var foundNumber = 0;
    //cycle through all numbers
    while (counter <= maxNumber){
      var j=1;
      //cycle through all divisors
      while (j <= maxDivisor){
        if(counter % j !== 0){
          break;
        } else if (j === maxDivisor){
          //our counter has beed divided by all the numbers
          foundNumber = counter;
          break;
        }
        j++;
      }
      //break the while cycle if the number is found.
      if(foundNumber>0){
        break;
      }
      counter++;
    }

    return foundNumber;
  }

  return (
    <div>
      <TitleSection />

      <p className="text-break">The smallest positive number that is evenly divisible by all of the numbers from 1 to 20 is:
      <br />
      
      <br/>
      <div class="spinner-border spinner-border-sm" role="status" style={{display : isLoading ? "block" : "none"}}>
        <span class="visually-hidden">Loading...</span>
      </div>
      <strong>{result}</strong></p>

    </div>
  );
}