const textElement = document.querySelector(".animated-text")
const texts = [
    "Everything is going too fast",
    "But you’re okay",
    "You are ken",
    "Re-assure yourself",
    "Click the button and be free",
    "No matter how hard things are",
    "The tools are there for you",
    "You need to chillax",
    "Everything is gonna be fine",
    "Just go with the flow",
    "Plan your way through",
    "You’ve got this",
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


function addPoint(element) {
    const spanElement = element.querySelector('.point-span');

    if (!spanElement.classList.contains('animate-point')) {
        spanElement.classList.add('animate-point');

        setTimeout(() => {
            spanElement.classList.remove('animate-point');
        }, 1500);
    }
}
