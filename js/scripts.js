/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    var closeModalButtons = document.querySelectorAll('.close-modal');

    closeModalButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var videos = document.querySelectorAll('video');
            videos.forEach(function(video) {
                video.pause(); // Pausa la reproducción del video
            });
        });
    });
});

// Observador de mutaciones para detectar cambios en el DOM
const observer = new MutationObserver(function(mutationsList, observer) {
    // Verificar si el pop-up está cerrado
    const modalOpen = document.querySelector('.modal.show');
    if (!modalOpen) {
        // Detener la reproducción del video
        var videos = document.querySelectorAll('video');
        videos.forEach(function(video) {
            video.pause(); // Pausa la reproducción del video
        });
    }
});

// Configurar opciones para el observador de mutaciones
const observerConfig = { attributes: true, childList: true, subtree: true };

// Comenzar a observar cambios en el DOM
observer.observe(document.body, observerConfig);


function irAlTiempo(tiempoSegundos) {
    var miVideo = document.getElementById('videoBugbusters');
    miVideo.currentTime = tiempoSegundos;
    miVideo.play(); // Inicia la reproducción del video desde el tiempo especificado
}