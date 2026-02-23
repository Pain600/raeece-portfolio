// Copy Email
function copyEmail() {
    navigator.clipboard.writeText("raeecesamuels100@gmail.com");
    alert("Email copied!");
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'c') copyEmail();
    if (e.key.toLowerCase() === 'g') window.open('https://github.com/Pain600', '_blank');
});

// Animate Cards on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.style.opacity = 1;
    });
});

document.querySelectorAll('.card').forEach((card) => {
    card.style.opacity = 1;
    card.style.transition = "opacity 0.8s ease-in";
    observer.observe(card);
});