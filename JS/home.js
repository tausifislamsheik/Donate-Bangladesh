// Card 1
document.getElementById('card1-btn').addEventListener('click', function(){
    const inputValue = cardInputValueById('inputField-card1');
    if(isNaN(inputValue)){
        alert('Please provide numeric value');
        document.getElementById('inputField-card1').value ='';
        return;
    }
    const cardBalance = cardBalanceById('card-1');
    const cardNewBalance1 = inputValue + cardBalance;
    document.getElementById('card-1').innerText = cardNewBalance1;
    const totalBalance = totalBalanceById('total-balance');
    const totalNewBalance = totalBalance - inputValue;
    document.getElementById('total-balance').innerText = totalNewBalance;
    
    document.getElementById('inputField-card1').value ='';
});
