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

    // History Section
    const div = document.createElement('div');
    div.className = 'text-center text-3xl font-bold border border-gray-300 rounded-xl';
    // Get current date and time string
    const now = new Date();
    const formattedDate = now.toString();
    div.innerHTML = `
        <h1 class='p-4'>
            <span class='text-green-500'>${inputValue}</span> Taka is Donated For Flood at Noakhali, Bangladesh<br/>
            <span class="text-lg font-normal text-gray-600">Date: ${formattedDate}</span>
        </h1>
    `;
    document.getElementById('history-container').appendChild(div);
});

// card 2

document.getElementById('card2-btn').addEventListener('click', function(){
    const inputValue = cardInputValueById('inputField-card2');
    if(isNaN(inputValue)){
        alert('Please provide numeric value');
        document.getElementById('inputField-card2').value ='';
        return;
    }
    const cardBalance = cardBalanceById('card-2');
    const cardNewBalance1 = inputValue + cardBalance;
    document.getElementById('card-2').innerText = cardNewBalance1;
    const totalBalance = totalBalanceById('total-balance');
    const totalNewBalance = totalBalance - inputValue;
    document.getElementById('total-balance').innerText = totalNewBalance;
    
    document.getElementById('inputField-card2').value ='';

    // History Section
    const div = document.createElement('div');
    div.className = 'text-center text-3xl font-bold border border-gray-300 rounded-xl my-5';
    // Get current date and time string
    const now = new Date();
    const formattedDate = now.toString();
    div.innerHTML = `
        <h1 class='p-4'>
            <span class='text-green-500'>${inputValue}</span> Taka is Donated For Flood Relief in Feni,Bangladesh<br/>
            <span class="text-lg font-normal text-gray-600">Date: ${formattedDate}</span>
        </h1>
    `;
    document.getElementById('history-container').appendChild(div);
});

// card 3

document.getElementById('card3-btn').addEventListener('click', function(){
    const inputValue = cardInputValueById('inputField-card3');
    if(isNaN(inputValue)){
        alert('Please provide numeric value');
        document.getElementById('inputField-card3').value ='';
        return;
    }
    const cardBalance = cardBalanceById('card-3');
    const cardNewBalance1 = inputValue + cardBalance;
    document.getElementById('card-3').innerText = cardNewBalance1;
    const totalBalance = totalBalanceById('total-balance');
    const totalNewBalance = totalBalance - inputValue;
    document.getElementById('total-balance').innerText = totalNewBalance;
    
    document.getElementById('inputField-card3').value ='';

    // History Section
    const div = document.createElement('div');
    div.className = 'text-3xl font-bold border border-gray-300 rounded-xl';
    // Get current date and time string
    const now = new Date();
    const formattedDate = now.toString();
    div.innerHTML = `
        <h1 class='p-4'>
            <span class='text-green-500'>${inputValue}</span> Taka is Donated For Injured in the Quota Movement,Bangladesh<br/>
            <span class="text-lg font-normal text-gray-600">Date: ${formattedDate}</span>
        </h1>
    `;
    document.getElementById('history-container').appendChild(div);
});

// Blog section

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html'
})
