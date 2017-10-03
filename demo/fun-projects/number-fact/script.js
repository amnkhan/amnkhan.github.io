// vars
let fact = document.querySelector('#fact');
let factText = document.querySelector('#fact-text');
let numberInput = document.querySelector('#numberInput');

// Fire event listener while user types a number
numberInput.addEventListener('input' , getFactAjax );

// The function that runns while user type any number to the input box
function getFactAjax() {
   // Local Scope vars
   let number = numberInput.value;
   let xhr = new XMLHttpRequest();
   
   xhr.open( 'GET' , 'https://numbersapi.com/' + number );
   xhr.onload = function() {
      // Check if we get the query back from server
      if ( this.status == 200 && number != '' ) {
        // Make fact display block
        fact.style.display = 'block';
        // Print the fact text to dom
        factText.innerText = this.responseText;
      }
   }
   xhr.send();
}