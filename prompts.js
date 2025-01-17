const prompts = {
    school: [
        "what do you want to study in university ?",
        "Who was your most memorable teacher?",
        "What's your best school memory?",
        "What's the most valuable lesson you learned in school?",
        "What school tradition do you miss the most?"
    ],
    hobbies: [
        "What hobby would you like to master?",
        "What's a hobby you've always wanted to try?",
        "Which of your hobbies makes you lose track of time?",
        "What hobby has taught you the most?",
        "What's the most unique hobby you've heard of?"
    ],
    memories: [
        "What's your earliest memory?",
        "What's your happiest childhood memory?",
        "What's a memory that always makes you laugh?",
        "What's your most treasured family memory?",
        "What's a small moment you'll never forget?"
    ],
    obstacles: [
        "What's the biggest challenge you've overcome?",
        "What's a skill you struggled to learn?",
        "What's an obstacle you're proud of conquering?",
        "What's a fear you've faced?",
        "What's a challenge that made you stronger?"
    ]
};

let showPopupOnUpdate = false ;
const leftBox = document.getElementById('left-box');
const centerBox = document.getElementById('center-box');
const rightBox = document.getElementById('right-box');
const spinButton = document.getElementById('spin-button');
let currentCategory = 'hobbies';
let currentPromptIndex = 0;


function getRandomPrompt(category, exclude) {
const categoryPrompts = prompts[category];
let newIndex;
do {
newIndex = Math.floor(Math.random() * categoryPrompts.length);
} while (newIndex === exclude);
return { text: categoryPrompts[newIndex], index: newIndex };
}

function fireConfetti() {
const colors = ['#FF6B6B', '#FFE66D', '#4ECDC4', '#95E1D3'];

confetti({
particleCount: 1000,
spread: 70,
origin: { y: 0.6 },
colors: colors,
disableForReducedMotion: true
});
}

function showPopup(prompt) {
document.getElementById('popup-prompt').textContent = prompt;
document.getElementById('popup-overlay').classList.add('show');
fireConfetti();
}

function updatePrompts() {
leftBox.style.opacity = '0';
centerBox.style.opacity = '0';
rightBox.style.opacity = '0';

setTimeout(() => {
const { text: centerText, index: newIndex } = getRandomPrompt(currentCategory, currentPromptIndex);
const { text: leftText } = getRandomPrompt(currentCategory, newIndex);
const { text: rightText } = getRandomPrompt(currentCategory, newIndex);

centerBox.textContent = centerText;
leftBox.textContent = leftText;
rightBox.textContent = rightText;

currentPromptIndex = newIndex;

leftBox.classList.add('blurred');
rightBox.classList.add('blurred');
centerBox.classList.remove('blurred');

leftBox.style.opacity = '0.6';
centerBox.style.opacity = '1';
rightBox.style.opacity = '0.6';

if (showPopupOnUpdate){
showPopup(centerText);
}
showPopupOnUpdate = true; //ensures following updates show the popup
}, 100);
}

document.querySelectorAll('.category').forEach(button => {
button.addEventListener('click', () => {
document.querySelectorAll('.category').forEach(b => b.classList.remove('active'));
button.classList.add('active');
currentCategory = button.id.split('-')[0];//extracts the catergory from the prefix by spliting the string at the hyphen
showPopupOnUpdate = false;
updatePrompts();

});
});

document.getElementById('close-popup').addEventListener('click', function() {
document.getElementById('popup-overlay').classList.remove('show');
});

spinButton.addEventListener('click', updatePrompts);
updatePrompts();

const openPopupBtn = document.getElementById('open-popup-btn');
const closePopupBtn = document.getElementById('close-popup-btn');
const popup = document.getElementById('popup');


openPopupBtn.addEventListener('click', () => {
popup.classList.add('show'); 
});


closePopupBtn.addEventListener('click', () => {
popup.classList.remove('show'); 
});



const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
item.addEventListener('click', () => {
const navText = item.querySelector('span').textContent.trim();
alert(`Navigating to: ${navText}`);
});
});
