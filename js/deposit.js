/* document.getElementById('depositButton').addEventListener('click', function(){
    const depositField = document.getElementById('depositInput');
    const depositAmount = depositField.value;
    console.log(depositAmount)
    const depoField = document.getElementById('deposit-field');
    depoField.innerText = depositAmount;
}) */


// Create an event handler to deposit button
// now I'm going to update my baap er bank depository value

/* document.getElementById('depositButton').addEventListener('click', function(){
        const depositField = document.getElementById('depositInput');
        const newDepositText = depositField.value;
        // console.log(typeof newDepositText)
        const newDepositAmount = parseFloat(newDepositText);
        // console.log(depositAmount);
        const depoField = document.getElementById('deposit-field');
        const previousDepoText = depoField.innerText;
        const previousDepoAmount = parseFloat(previousDepoText);
        const depositCurrent = newDepositAmount + previousDepoAmount;
        // console.log(total)
        depoField.innerText = depositCurrent;
        // console.log(depositCurrent)
        depositField.value = '';
    }) */


document.getElementById('depositButton').addEventListener('click', function(){
    // console.log('hello')
    const depoInputAmount = document.getElementById('depositInput');
    // console.log(depoInputAmount.value);
    const depoAmountText = depoInputAmount.value;
    const depoNewAmount = parseFloat(depoAmountText);
    // console.log(typeof depoNewAmount);
    
    // Now I'm going to update my baap er bank deposit balance

    const depostiUpdateField = document.getElementById('deposit-field');
    // Deposit update field should be a inner text which is the value of input amount
    const depoUpdateText = depostiUpdateField.innerText;
    const depoUpdateAmount = parseFloat(depoUpdateText);
    // console.log(typeof depoUpdateAmount)

    // Now I'm adding two number of previous and new input value.
    const depositCurrentValue = depoNewAmount + depoUpdateAmount;
    // console.log(typeof depositCurrentValue)
    depostiUpdateField.innerText = depositCurrentValue;
    console.log(depositCurrentValue);
    depoInputAmount.value = '';
    

    // Total balance after deposit money


    const totalBalance = document.getElementById('balance-field');
    const totalBalacneText = totalBalance.innerText;
    // console.log(totalBalacneText)
    const newBalance = parseFloat(totalBalacneText);
    // console.log(typeof newBalance)
    const newTotalBalance = newBalance + depoNewAmount;
    // console.log(newTotalBalance)
    totalBalance.innerText = newTotalBalance;



});
