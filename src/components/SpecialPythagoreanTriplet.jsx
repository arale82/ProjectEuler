import { useEffect, useState } from "react";


function TitleSection(){
  return (
    <section class="text-center container">
      <div class="p-2 mb-2 bg-body-secondary text-end">25th June 2024</div>
      <h2 class="fw-light">Special Pythagorean Triplet</h2>
      <p class="lead text-body-secondary">
      A Pythagorean triplet is a set of three natural numbers, a &lt; b &lt; c, for which, 
      <br />a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
      <br /><br />
      There exists exactly one Pythagorean triplet for which 
      a + b + c = 100.
      <br />Find the product abc.</p>
    </section>
  );
}

function findSpecialTriplet(maxNum){
  var result = [];

  for(var numA = 0; numA < maxNum/2; numA ++){
    if(result.length !== 0){
      break;
    }
    for(var numB = 0; numB < maxNum/2; numB ++){
      if(result.length !== 0){
        break;
      }
      var numC = maxNum - numA - numB;
      if((numA*numA) + (numB*numB) === (numC*numC)){
        result = [numA, numB, numC];
        break;
      }
      
    }
  }
  return result;
}

export default function SpecialPythagoreanTriplet () {
  const[result, setResult] = useState();
  const[numberInput, setNumberInput] = useState();
  const[formResult, setFormResult] = useState();
  const[isLoading, setLoading] = useState(true);

  const maxNum = 1000;

  useEffect(() => {
    setTimeout(() => {
      let triplet = findSpecialTriplet(maxNum);
      if(triplet.length > 0){
        setResult(triplet[0]+" + "+triplet[1]+" + "+triplet[2] +" = "+maxNum);
      } else {
        setResult("Not found.");
      }
      setLoading(false);
    }, 100);
  }, []);

  function handleClick(){
    let triplet = findSpecialTriplet(numberInput);
    if(triplet.length > 0){
      setFormResult(triplet[0]+" + "+triplet[1]+" + "+triplet[2] +" = "+numberInput);
    } else {
      setFormResult("Not found.");
    }
  }

  return(
    <div>
      <TitleSection />

      <div class="spinner-border spinner-border-sm" role="status" style={{display : isLoading ? "block" : "none"}}>
        <span class="visually-hidden">Loading...</span>
      </div>
      <p><strong>{result}</strong></p>

      <form className="row g-3">
        <h3>Find Special Pythagorean Triplet:</h3>
        <div className="col-auto">
          <label className="visually-hidden" for="numberInput">Find the Special Pythagorean Triplet for another number:</label>
          <input type="number" className="form-control" name="numberInput" size="10"
            value={numberInput} onChange={(e) => {setNumberInput(e.target.value)}} />
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary mb-3" onClick={handleClick}>Find Prime Factors</button>
        </div>
        <p className="text-break">{formResult}</p>
      </form>
    </div>
  );
}
