// const menu = document.querySelector('#mobile-menu')
// const menuLinks = document.querySelector('.navbar__menu')

// menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// });

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    // Function to handle navigation
    function navigateTo(page) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');

        // Update content based on the requested page
        document.getElementById('content').innerHTML = pages[page];

        // Update browser history
        history.pushState({}, '', page);
    }

    // Event listener for mobile menu
    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    // Initial page load
    const path = window.location.pathname.substring(11); // remove '/websitename/' from URL
    navigateTo(path || '/index.html');

    // Navigation links
    document.querySelectorAll('.navbar__menu a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.getAttribute('href');
            navigateTo(page);
        });
    });

    // Handle back/forward button
    window.addEventListener('popstate', function () {
        const path = window.location.pathname.substring(11); // remove '/websitename/' from URL
        navigateTo(path || '/index.html');
    });
});