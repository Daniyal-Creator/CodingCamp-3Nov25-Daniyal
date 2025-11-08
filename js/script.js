
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