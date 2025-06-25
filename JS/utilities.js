function cardInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
};

function totalBalanceById(id){
    const totalBalance = document.getElementById(id).innerText;
    const totalBalanceNumber = parseFloat(totalBalance);
    return totalBalanceNumber;
};

function cardBalanceById(id){
    const cardBalance = document.getElementById(id).innerText;
    const cardBalanceNumber = parseFloat(cardBalance);
    return cardBalanceNumber;
};

function showClickButton(id){
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}