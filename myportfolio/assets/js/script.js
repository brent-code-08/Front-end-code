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

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

function addSkillBars() {
    const skills = document.querySelectorAll('.skill-item p');
    skills.forEach(skill => {
        const level = skill.textContent.toLowerCase();
        let width = 0;
        if (level.includes('expert')) width = 90;
        else if (level.includes('advanced')) width = 80;
        else if (level.includes('proficient')) width = 70;
        else if (level.includes('intermediate')) width = 60;
        else if (level.includes('basic')) width = 50;
        else if (level.includes('experienced')) width = 75;
        const bar = document.createElement('div');
        bar.style.height = '10px';
        bar.style.background = 'linear-gradient(to right, #667eea, #764ba2)';
        bar.style.width = width + '%';
        bar.style.marginTop = '10px';
        bar.style.borderRadius = '5px';
        bar.style.transition = 'width 1s ease-out';
        skill.appendChild(bar);
    });
}

window.addEventListener('load', addSkillBars);