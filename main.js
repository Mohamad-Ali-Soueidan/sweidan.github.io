// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
    navToggle.textContent = mobileMenu?.classList.contains('hidden') ? '[menu]' : '[close]';
});

// Close mobile menu when clicking an anchor link
mobileMenu?.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        navToggle.textContent = '[menu]';
    });
});

// Theme — auto-detect by time, allow manual override
function getTimeBasedTheme() {
    const hour = new Date().getHours();
    return (hour >= 18 || hour < 6) ? 'dark' : 'light';
}

function setTheme(theme) {
    if (theme === 'light') {
        document.documentElement.classList.add('light');
    } else {
        document.documentElement.classList.remove('light');
    }
    const label = theme === 'dark' ? '[light]' : '[dark]';
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        btn.textContent = label;
    });
}

function toggleTheme() {
    const isLight = document.documentElement.classList.contains('light');
    const newTheme = isLight ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

// Initialize
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme || getTimeBasedTheme());

document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
});
