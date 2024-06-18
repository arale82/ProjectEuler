import React, {useState} from "react";

function TitleSection(){
  return (
    <section class="text-center container">
      <div class="p-2 mb-2 bg-body-secondary text-end">18th June 2024</div>
      <h2 class="fw-light">Multiples of 3 or 5</h2>
      <p class="lead text-body-secondary">
      If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 10. 
      The sum of these multiples is 23.
      <br />
      Find the sum of all the multiples of 3 or 5 below 1000.</p>

    </section>
  );
}

function findMultiplesOf(factor, endNumber){
  var multiples = [];
  for (var i = 0; i < endNumber; i++) {
    if(i % factor === 0){
      multiples.push(i);
    }
  }
  //delete 0
  multiples.shift();
  return multiples.toString();
}

export default function MultiplesOf3and5 (){
  const maxNumber = 1000;

  var multiples3 = findMultiplesOf(3, maxNumber);
  var multiples5 = findMultiplesOf(5, maxNumber);

  const[multipleInput, setMultipleInput] = useState();
  const[formResult, setFormResult] = useState();

  function handleClick(){
    setFormResult(findMultiplesOf(multipleInput, maxNumber));
    setMultipleInput(null);
  }

  return(
    <div>
      <TitleSection />

      <p className="text-break"><strong>Multiples of 3:</strong> {multiples3}</p>
      <p className="text-break"><strong>Multiples of 5:</strong> {multiples5}</p>

      <form className="row g-3">
        <h3>Find other multiples:</h3>
        <div className="col-auto">
          <label className="visually-hidden" for="multipleInput">Find other multiples</label>
          <input type="number" className="form-control" name="multipleInput" size="10"
            value={multipleInput} onChange={(e) => {setMultipleInput(e.target.value)}} 
             min="1" max={maxNumber}/>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary mb-3" onClick={handleClick}>Find Multiples</button>
        </div>
        <p className="text-break">{formResult}</p>
      </form>
    </div>
  );
}