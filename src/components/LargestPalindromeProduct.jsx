
function TitleSection(){
  return (
    <section class="text-center container">
      <div class="p-2 mb-2 bg-body-secondary text-end">21st June 2024</div>
      <h2 class="fw-light">Largest Palindrome Product</h2>
      <p class="lead text-body-secondary">
      A palindromic number reads the same both ways. The largest palindrome made from the product of two 
      2-digit numbers is 9009 = 91x99.<br/>
      Find the largest palindrome made from the product of two 3-digit numbers.</p>

    </section>
  );
}

function checkIsPalindrome(text){
  var strArray = text.split("");
  var newArray = strArray.toReversed();
  return strArray.toString() === newArray.toString();
}

export default function LargestPalindromeProduct(){
  var maxNumber = 999;
  var limit = 100;
  var printResult = "";

  var palindromeProd = 0;

  for(var i=0;i<limit;i++){
    const firstNum = maxNumber-i;
    for(var y=0;y<limit;y++){
      const secondNum = maxNumber-y;
      var prod = firstNum*secondNum;
      if(checkIsPalindrome(prod.toString())){
        if(prod > palindromeProd) {
          palindromeProd = prod;
          printResult = firstNum + " x "+secondNum + " = "+palindromeProd;
        }
      }
    }
  }

  return (
    <div>
      <TitleSection />
      <p>{printResult.toString()}</p>
    </div>
  );
}