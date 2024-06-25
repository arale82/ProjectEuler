import { useEffect, useState } from "react";


function TitleSection(){
  return (
    <section class="text-center container">
      <div class="p-2 mb-2 bg-body-secondary text-end">25th June 2024</div>
      <h2 class="fw-light">Sum Square Difference</h2>
      <p class="lead text-body-secondary">
      Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p>
    </section>
  );
}

export default function SumSquareDifference () {
  const[result, setResult] = useState();

  var maxNum = 100;

  useEffect((maxNum) => {
    //Runs only on the first render. 
    findSumSquareDifference(maxNum);
  }, []);

  //leave the calculation in a function to avoid infinite loop
  function findSumSquareDifference(maxNum){
    var maxSquareSum = 0;
    var maxSum = 0;
    for(var i=1; i<=maxNum; i++){
      var square = i*i;
      maxSquareSum += square;

      maxSum += i;
    }

    var squaredMaxSum = maxSum*maxSum;
    setResult(maxSquareSum+" - "+squaredMaxSum+" = "+(squaredMaxSum-maxSquareSum));
  }

  return (
    <div>
      <TitleSection />

      <p>
        ( 1 + 2 + ... + {maxNum} )<sup>2</sup>
        -
        ( 1<sup>2</sup> + 2<sup>2</sup> + ... + {maxNum}<sup>2</sup> )
      </p>

      <p><strong>{result}</strong></p>
    </div>
  );
}