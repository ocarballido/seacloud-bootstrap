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