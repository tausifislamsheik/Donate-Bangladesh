document.getElementById('donation-btn').addEventListener('click', function(){
    showClickButton('card-section');
});

document.getElementById('history-btn').addEventListener('click', function(){
    showClickButton('history-section');
});

// Active or selected button feature

document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelectorAll('.active-button'); 

    function handleButtonClick(buttonElement) {
        actionButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        buttonElement.classList.add('active');

        const sectionIdToShow = buttonElement.id.replace('show-', '') + '-section';

        if (typeof showClickSection === 'function') {
            showClickSection(sectionIdToShow);
        } else {
            console.error('The function showClickSection is not defined. Make sure utilities.js is loaded before features.js.');
        }
    }


    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleButtonClick(this); 
        });
    });

    
    const initiallyActiveButton = document.querySelector('.active-button.active');
    if (initiallyActiveButton) {
        const sectionIdToShow = initiallyActiveButton.id.replace('show-', '') + '-section';
        if (typeof showClickSection === 'function') {
            showClickSection(sectionIdToShow);
        } else {
            console.error('The function showClickSection is not defined for initial setup.');
        }
    } else if (actionButtons.length > 0) {
        
    }
});