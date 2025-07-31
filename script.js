// Telegram join function
function joinTelegram() {
    // Replace 'YOUR_TELEGRAM_CHANNEL' with your actual Telegram channel username
    window.open('https://t.me/YOUR_TELEGRAM_CHANNEL', '_blank');
}
// Improved Countdown timer: always runs and resets after 24 hours
function updateCountdown() {
    const now = new Date();
    let end = window.countdownEnd;
    if (!end || now >= end) {
        end = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        window.countdownEnd = end;
    }
    const distance = end - now;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');
    if (h && m && s) {
        h.innerHTML = hours.toString().padStart(2, '0');
        m.innerHTML = minutes.toString().padStart(2, '0');
        s.innerHTML = seconds.toString().padStart(2, '0');
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();
// Add smooth scrolling and interactive effects
window.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
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
    // Observe all feature cards and tip cards
    document.querySelectorAll('.feature, .tip-card, .testimonial').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});