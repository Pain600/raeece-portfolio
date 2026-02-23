// Copy email
function copyEmail() {
    const email = "raeecesamuels100@gmail.com";
    navigator.clipboard.writeText(email);
    
    // Simple notification logic
    console.log("Email copied!");
    alert("Email copied to clipboard!"); 
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll('.card').forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'c') copyEmail();
    if (e.key.toLowerCase() === 'g') window.open('https://github.com/Pain600', '_blank');
});