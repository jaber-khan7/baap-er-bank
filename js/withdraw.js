// how much money you have withdrawed ever
// first we select the withdraw button and the set an event handler
document.getElementById('withdrawButton').addEventListener('click', function(){
    // console.log('hello')
    // now we will take the vlue of widthdraw input value
    const widthdrawAmount = document.getElementById('withdrawInput');
    // console.log(widthdrawAmount.value)
    const newWidthdrawText = widthdrawAmount.value;
    // console.log(newWidthdrawText)
    const newWidthdrawAmount = parseFloat(newWidthdrawText);
    // console.log(typeof newWidthdrawAmount)

    // Now I'm going to set the withdraw value in the update section of withdraw
    const withdrawUpdateField = document.getElementById('withdraw-field');
    // console.log(withdrawUpdateField.innerText)

    // Now I'm update the withdraw value with previous value
    const withdrawUpdateText = withdrawUpdateField.innerText;
    // console.log(withdrawUpdateText)
    const withdrawUpdatAmount = parseFloat(withdrawUpdateText);
    // console.log(typeof withdrawUpdatAmount)
    const withdrawCurrent = newWidthdrawAmount + withdrawUpdatAmount;
    // console.log(withdrawCurrent)
    withdrawUpdateField.innerText = withdrawCurrent;
    widthdrawAmount.value = '';



    // New banalce after withdraw money
    const totalAfterWithdraw = document.getElementById('balance-field');
    const afterWithdrawText = totalAfterWithdraw.innerText;
    // console.log(afterWithdrawText)
    const afterWithdrawAmount = parseFloat(afterWithdrawText);
    // console.log(typeof afterWithdrawAmount);
    const totalNewAmount = afterWithdrawAmount - newWidthdrawAmount;
    totalAfterWithdraw.innerText = totalNewAmount;
})