// deposit value
function getInputValue(inputId){
   const inputField = document.getElementById(inputId);
   const inputValueInText = inputField.value;
   const inputValue = parseFloat(inputValueInText);
   inputField.value = '';
   return inputValue;
}
// withdraw value
function showInputValue(inputId, amount){
   const totalTag = document.getElementById(inputId);
   const previousValueInText = totalTag.innerText;
   const previousValue = parseFloat(previousValueInText);
   const totalValue = previousValue + amount;
   totalTag.innerText = totalValue;
}
// balance
function totalBalance(amount, isIncreasing){
   const previousbalanceInput = document.getElementById('balance-field');
   const previousBalanceInText = previousbalanceInput.innerText;
   const previousBalance = parseFloat(previousBalanceInText);
   let currentBalance;
   if(isIncreasing == true){
      currentBalance =  previousBalance + amount;
   }
   else{
      currentBalance = previousBalance - amount;
   }
   previousbalanceInput.innerText = currentBalance;
}
// total deposit value
document.getElementById('depositButton').addEventListener('click', function(){
   const valueOfInput = getInputValue('depositInput');
   showInputValue('deposit-field', valueOfInput);
   totalBalance(valueOfInput, true);
});

// total withdraw value
document.getElementById('withdrawButton').addEventListener('click', function(){
   const valueOfInput = getInputValue('withdrawInput');
   showInputValue('withdraw-field', valueOfInput);
   totalBalance(valueOfInput, false);
});