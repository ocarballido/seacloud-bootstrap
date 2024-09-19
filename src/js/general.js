// Appbar animation color
export const appbarScrolled = () => {
    const navElement = document.querySelector('#appbar');
    const appbarLogo = document.querySelector('#appbarLogo');
    const appbarLogoSymbol = document.querySelector('#appbarLogoSymbol');
    const scrollTop = document.querySelectorAll('.scroll-top');
    const scrolled = document.querySelectorAll('.scrolled');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 300) {
            navElement.classList.add('navbar-scrolled');
            navElement.classList.remove('py-4');
            navElement.classList.add('py-1');
            appbarLogo.classList.add('d-none');
            appbarLogoSymbol.classList.remove('d-none', 'py-4');
            scrollTop.forEach(function(element) {
                element.classList.add('d-none');
            });
            scrolled.forEach(function(element) {
                element.classList.remove('d-none');
            });
        } else if (window.scrollY < 300) {
            navElement.classList.remove('navbar-scrolled');
            navElement.classList.remove('py-1');
            navElement.classList.add('py-4');
            appbarLogo.classList.remove('d-none');
            appbarLogoSymbol.classList.add('d-none');
            scrollTop.forEach(function(element) {
                element.classList.remove('d-none');
            });
            scrolled.forEach(function(element) {
                element.classList.add('d-none');
            });
        }
    });
}

// Copyright
export const copyright = () => {
    const dateEl = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    dateEl.textContent = currentYear;
}

// Footer accordion
export const footerAccordionUx = () => {
    const toggleClassShowOnQuery = () => {
        const screenWidth = window.innerWidth;

        const footer = document.getElementById("footer");

        const accordionsButon = footer.querySelectorAll(".accordion-button");
        const accordionsBody = footer.querySelectorAll(".accordion-collapse");

        for (let i = 0; i < accordionsBody.length; i++) {
            const buttonEl = accordionsButon[i];
            const bodyEl = accordionsBody[i];
        
            // Check if the screen width is smaller than 768px
            if (screenWidth < 768) {
                // Add the "show" class
                if (bodyEl.classList.contains('show')) {
                    buttonEl.classList.remove("collapsed");
                    bodyEl.classList.add("show");
                }
                buttonEl.classList.add("collapsed");
                bodyEl.classList.remove("show");
            } else {
                // Remove the "show" class
                if (bodyEl.classList.contains('show')) {
                    buttonEl.classList.add("collapsed");
                    bodyEl.classList.remove("show");
                }
                buttonEl.classList.remove("collapsed");
                bodyEl.classList.add("show");
            }
        }
    }

    toggleClassShowOnQuery();
    window.addEventListener("resize", toggleClassShowOnQuery);
}