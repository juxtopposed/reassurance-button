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
    points++;
    localStorage.setItem('points', points);
    pointCounter.textContent = `${points}`;

    const spanElement = document.createElement('span');
    spanElement.textContent = '+1 Reassurance Point';
    spanElement.classList.add(
        'text-green', 'font-body', 'text-xs',
        'font-medium', 'absolute', '-translate-x-1/2',
        'left-1/2', '-top-1/2', 'whitespace-nowrap',
        'block', 'z-[-5]', 'opacity-0',
        'point-span', 'animate-point'
    );

    spanElement.addEventListener('animationend', () => {
        spanElement.remove();
    }, { once: true });

    element.appendChild(spanElement);
}
