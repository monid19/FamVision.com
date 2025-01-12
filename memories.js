document.addEventListener("DOMContentLoaded", () => {
    const containerOct = document.querySelector('.cards-container-october');
    const containerNov = document.querySelector('.cards-container-november');
    const containerDec = document.querySelector('.cards-container-december');
    const fileInput = document.getElementById('fileInput');
    let currentCard; // Track clicked card
    
    const emptyDaysOct = 2; // Days before the 1st of the month (e.g., December starts on a Friday)
    const totalDaysOct = 31;

    // Generate cards
    for (let i = 0; i < emptyDaysOct; i++) {
        containerOct.innerHTML += '<div></div>';
    }
    for (let day = 1; day <= totalDaysOct; day++) {
        containerOct.innerHTML += `<div class="card"><a>${day}</a></div>`;
    }

    const emptyDaysNov = 5; // Days before the 1st of the month (e.g., December starts on a Friday)
    const totalDaysNov = 30;

    for (let i = 0; i < emptyDaysNov; i++) {
        containerNov.innerHTML += '<div></div>';
    }
    for (let day = 1; day <= totalDaysNov; day++) {
        containerNov.innerHTML += `<div class="card"><a>${day}</a></div>`;
    }


    const emptyDaysDec = 6; // Days before the 1st of the month (e.g., December starts on a Friday)
    const totalDaysDec = 31;
    
    for (let i = 0; i < emptyDaysDec; i++) {
        containerDec.innerHTML += '<div></div>';
    }
    for (let day = 1; day <= totalDaysDec; day++) {
        containerDec.innerHTML += `<div class="card"><a>${day}</a></div>`;
    }


    // Add event listeners to cards
    containerOct.addEventListener('click', (event) => {
        if (event.target.closest('.card')) {
            currentCard = event.target.closest('.card');
            fileInput.click(); // Open file input on card click
        }
    });
    
    // Handle file input selection
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && currentCard) {
            const reader = new FileReader();
            reader.onload = function(e) {
                currentCard.innerHTML = `<div class="card"><img src="${e.target.result}" alt="Uploaded Image"><a>${currentCard.querySelector('a').textContent}</a></div>`;
            };
            reader.readAsDataURL(file);
        }
        fileInput.value = ""; // Reset file input
    });

    
});