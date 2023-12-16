// Appbar animation color
export const appbarScrolled = () => {
    console.log('General')
    const navElement = document.querySelector('#appbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navElement.classList.add('navbar-scrolled')
        } else if (window.scrollY < 56) {
            navElement.classList.remove('navbar-scrolled')
        }
    });
}

// Copyright
export const copyright = () => {
    const dateEl = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    dateEl.textContent = currentYear;
}