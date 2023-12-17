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

// Footer accordion
export const footerAccordionUx = () => {
    const footerAccordions = document.querySelectorAll('.footer-accordion');

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