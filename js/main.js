document.addEventListener('DOMContentLoaded', () => {
    const pageBody = document.body;

    spinArrow();
    burgerMenu(pageBody);
    popUpContacts(pageBody);
    scrollFunction();
    numberAnimation();
    preloader();
});

function scrollFunction() {
    const header = document.querySelector('header');
    const mapContainer = document.querySelector('.container__map');


    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (scrollY > 700) {
            header.classList.add('scrolled-700');
        } else {
            header.classList.remove('scrolled-700');
        }

        if (scrollY > 2100) {
            mapContainer.classList.add('animated_map');
        } 
    });
}

function spinArrow() {
    const language = document.querySelector('.language');
    
    language.addEventListener('click', () => language.classList.toggle('language_active'));
}

function burgerMenu(pageBody) {
    const burger = document.querySelector('.burger');
    
    burger.addEventListener('click', () => pageBody.classList.toggle('header__menu_active'));
}

function popUpContacts(pageBody) {
    const contactEll = document.querySelector('.contacts');
    const closeItem = document.querySelector('.cross');

    if (contactEll && closeItem) {
        contactEll.addEventListener('click', () => pageBody.classList.add('popup__contact_active'));
        closeItem.addEventListener('click', () => pageBody.classList.remove('popup__contact_active'));
    }
}

function numberAnimation() {
    const counters = document.querySelectorAll('.counter');
    const animationStartScroll = 3000; 
    let hasAnimated = false; 

    const animateCount = counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const suffix = counter.getAttribute('data-suffix') || "";
        let current = 0;
        const duration = 2000; 
        const steps = 60; 
        const increment = Math.ceil(target / (duration / (1000 / steps)));

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.innerText = `${target.toLocaleString()}${suffix}`;
            } else {
                counter.innerText = `${current.toLocaleString()}${suffix}`;
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    };

    const onScroll = () => {
        if (!hasAnimated && window.scrollY >= animationStartScroll) {
            counters.forEach(counter => {
                counter.classList.add('visible');
                animateCount(counter);
            });
            hasAnimated = true;
        }
    };

    window.addEventListener('scroll', onScroll);
}


function preloader() {
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
    
        preloader.style.display = 'none';
    });
}
