const texts = [" Discover our games", "Play with confidence", "Trusted by leaders"];
let index = 0;
let textIndex = 0;
const speed = 100;
const pauseDuration = 1500;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function typeWriter() {
    if (textIndex < texts[index].length) {
        document.getElementById("typed-text").innerHTML += texts[index].charAt(textIndex);
        textIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {

            index = (index + 1) % texts.length;
            textIndex = 0;
            document.getElementById("typed-text").innerHTML = "";
            typeWriter();
        }, pauseDuration);
    }
}

typeWriter();

const offers = [
    {
        icon: '<i class="fas fa-gamepad"></i>',
        title: 'Diverse Game Selection',
        description: 'From classic favorites to innovative new releases, our extensive game library has something for every player.'
    },
    {
        icon: '<i class="fas fa-shield-alt"></i>',
        title: 'Advanced Security',
        description: 'We ensure that our platforms are built with robust security protocols to protect your data.'
    },
    {
        icon: '<i class="fas fa-headset"></i>',
        title: 'Customer Support',
        description: 'Our 24/7 customer support ensures your operations run smoothly without interruptions.'
    }
];
let currentIndex = 0;

function updateOffer() {
    const currentOffer = offers[currentIndex];
    document.querySelector('.icon-container').innerHTML = currentOffer.icon;
    document.getElementById('offer-title').innerText = currentOffer.title;
    document.getElementById('offer-description').innerText = currentOffer.description;
    document.querySelector('.offer').style.transform = 'scale(1.05)';
    setTimeout(() => {
        document.querySelector('.offer').style.transform = 'scale(1)';
    }, 300);
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : offers.length - 1;
    updateOffer();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex < offers.length - 1) ? currentIndex + 1 : 0;
    updateOffer();
});

function autoSlide() {
    currentIndex = (currentIndex < offers.length - 1) ? currentIndex + 1 : 0;
    updateOffer();
}

const form = document.getElementById('demoForm');
const inputs = form.querySelectorAll('input, textarea');
const button = form.querySelector('button');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const allFilled = [...inputs].every(input => input.value.trim() !== "");
        if (allFilled) {
            button.disabled = false;
            button.classList.add('active');
        } else {
            button.disabled = true;
            button.classList.remove('active');
        }
    });
});

// Initialize with the first offer
updateOffer();

// Auto-slide every 5 seconds
setInterval(autoSlide, 7000);
