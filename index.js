const textElement = document.querySelector(".animated-text");
const texts = [
    "Everything is going too fast",
    "But you’re okay",
    "You are kenough",
    "Re-assure yourself",
    "Click the button and be free",
    "No matter how hard things are",
    "The tools are there for you",
    "You need to chillax",
    "Everything is gonna be fine",
    "Just go with the flow",
    "Plan your way through",
    "You’ve got this",
    "Just take a deep breath",
    "You've been too overwhelmed",
    "You were born to be great",
    "You are doing your best",
    "You are awesome",
    "You can do it",
    "You will get through anything",
    "You are ready",
    "Things might be overwhelming rn",
];

let index = 0;

textElement.classList.add('opacity-100');

setInterval(() => {
    textElement.classList.remove('opacity-100');
    setTimeout(() => {
        textElement.textContent = texts[index];
        index = (index + 1) % texts.length;
        textElement.classList.add('opacity-100');
    }, 300);
}, 3000);

let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
const pointCounter = document.getElementById('point-counter');
pointCounter.textContent = `${points}`;

function addPoint(element) {
    const spanElement = element.querySelector('.point-span');

    if (!spanElement.classList.contains('animate-point')) {
        points++;
        localStorage.setItem('points', points);
        pointCounter.textContent = `${points}`;
        
        spanElement.classList.add('animate-point');

        spanElement.addEventListener('animationend', () => {
            spanElement.classList.remove('animate-point');
        }, { once: true });
    }
}
