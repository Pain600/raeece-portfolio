// Copy Email
function copyEmail() {
    navigator.clipboard.writeText("raeecesamuels100@gmail.com");
    alert("Email copied!");
}

function copyNumber(){
    navigator.clipboard.writeText("0603347942");
    alert("Cell number copied")
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'c') copyEmail();
    if (e.key.toLowerCase() === 'g') window.open('https://github.com/Pain600', '_blank');
    if (e.key.toLowerCase() === 'n') copyNumber();
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