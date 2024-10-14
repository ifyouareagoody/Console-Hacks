function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Function that glitches elements in the HTML code
function glitchElement(el) {
    el.style.position = 'relative';
    el.style.left = getRandom(-10, 10) + 'px';
    el.style.top = getRandom(-10, 10) + 'px';

    // rotate elements randomly
    el.style.transform = `rotate(${getRandom(-5, 5)}deg)`;

    // random bg clolor
    el.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
}

// repeat glitching
function glitchPage() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        if (Math.random() < 0.1) {
            glitchElement(el);
        }
    });

    // Glitch every 300ms
    setTimeout(glitchPage, 300);
}

glitchPage(); // Calls the function
