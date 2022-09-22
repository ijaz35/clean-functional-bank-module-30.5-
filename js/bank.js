
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getInnerText(fieldId) {
    const elementField = document.getElementById(fieldId);
    const fieldValue = parseFloat(elementField.innerText);
    return fieldValue;
}

function setInnerText(fieldId, amount) {
    const valueSetField = document.getElementById(fieldId);
    valueSetField.innerText = amount;
}

/* function getTotal(inputId, fieldId) {
    const total = getInnerText(fieldId) + getInputValue(inputId);
    return total;
} */
/* function totalBalance(transactionsAmount, isDeposite) {
    const previousTotalBalance = getInnerText('total-balance');
    let newTotalBalance;
    if (isDeposite) {
        newTotalBalance = previousTotalBalance + transactionsAmount;
    } else {
        newTotalBalance = previousTotalBalance - transactionsAmount;
    }
    setInnerText('total-balance', newTotalBalance);
} */
document.getElementById('deposit-btn').addEventListener('click', function () {
    const currentDeposit = getInputValue('deposit-input');
    const previousDeposit = getInnerText('deposit-amount');
    const totalDeposit = currentDeposit + previousDeposit;
    setInnerText('deposit-amount', totalDeposit);

    const previousTotalBalance = getInnerText('total-balance');
    const newTotalBalance = previousTotalBalance + currentDeposit;
    setInnerText('total-balance', newTotalBalance);
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const currentWithdraw = getInputValue('withdraw-input');
    const previousWithdraw = getInnerText('withdraw-amount');
    const totalWithdraw = currentWithdraw + previousWithdraw;
    setInnerText('withdraw-amount', totalWithdraw);

    const previousTotalBalance = getInnerText('total-balance');
    const newTotalBalance = previousTotalBalance - currentWithdraw;
    setInnerText('total-balance', newTotalBalance);
})