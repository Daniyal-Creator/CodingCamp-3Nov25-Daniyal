
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');

    setTimeout(function() {
        loader.classList.add('fade-out');

        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
});

function revealTextOnScroll() {
    const revealElements = document.querySelectorAll('.reveal-text');
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealTextOnScroll);

window.addEventListener('load', revealTextOnScroll);


const textArray = [
    "Creative Developer & Designer",
    "Passionate About Creating Elegant Digital Experiences",
    "Building Beautiful & Functional Websites",
    "Turning Ideas Into Reality"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = textArray[textIndex];
    const typedTextElement = document.getElementById('typed-text');
    
    if (!isDeleting) {

        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {

            isDeleting = true;
            typingSpeed = 2000;
        } else {
            typingSpeed = 100;
        }
    } else {

        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            typingSpeed = 500;
        }
    }
    
    setTimeout(typeText, typingSpeed);
}


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeText, 1000); 
});


       
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 5px 20px rgba(212, 175, 55, 0.1)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });
                const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);


        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });


        document.querySelector('#home').style.opacity = '1';
        document.querySelector('#home').style.transform = 'translateY(0)';

function setActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

window.addEventListener('load', setActiveNav);

const skillCards = document.querySelectorAll('.skill-item');

skillCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
    });
});

const hobbyCards = document.querySelectorAll('.hobby-card');

hobbyCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});