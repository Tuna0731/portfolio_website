AOS.init({ offset: 0, duration: 1000, once: true });


const words = ["Designer", "Developer", "Freelancer"];
let i = 0, j = 0, isDeleting = false;

function type() {
    const current = words[i];
    const el = document.querySelector('.typewriter-text');
    if (isDeleting) {
        el.textContent = current.substring(0, j--);
    } else {
        el.textContent = current.substring(0, j++);
    }
    if (!isDeleting && j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }
    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();


function hamburg() {
    document.querySelector('.dropdown').style.transform = 'translateY(0)';
    document.querySelector('.hamburg').style.opacity = '0';
    document.querySelector('.hamburg').style.pointerEvents = 'none';
    document.querySelector('.cancel').style.opacity = '1';
    document.querySelector('.cancel').style.pointerEvents = 'all';
}

function cancel() {
    document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
    document.querySelector('.hamburg').style.opacity = '1';
    document.querySelector('.hamburg').style.pointerEvents = 'all';
    document.querySelector('.cancel').style.opacity = '0';
    document.querySelector('.cancel').style.pointerEvents = 'none';
}


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-container .links .link a');

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
