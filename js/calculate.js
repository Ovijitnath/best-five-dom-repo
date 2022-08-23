// Calculation logics
document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPersonCost = getInputValueById('per-player-input');
    const selectedPlayerValue = getTextElementValueById('total-added-player');
    const totalPlayerExpenses = selectedPlayerValue * perPersonCost;
    setTextElementValue('player-expense-total', totalPlayerExpenses);
    return totalPlayerExpenses;

})

document.getElementById('btn-total-calculate').addEventListener('click', function () {

    const managerCost = getInputValueById('manager-cost-input');
    const coachCost = getInputValueById('coach-cost-input');
    const playerExpensesAmount = getTextElementValueById('player-expense-total');

    const overAllTotal = managerCost + coachCost + playerExpensesAmount;
    setTextElementValue('overall-total-field', overAllTotal);
})