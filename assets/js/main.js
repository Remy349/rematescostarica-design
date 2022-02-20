document.addEventListener('DOMContentLoaded', () => {
    /* SHOW MENU */
    const navMenu = document.getElementById('navMenu'),
        navToggle = document.getElementById('navToggle'),
        navClose = document.getElementById('navClose');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    /* CHANGE BACKGROUND HEADER */
    function scrollHeader() {
        const header = document.getElementById('header');

        if (this.scrollY >= 100) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }

    window.addEventListener('scroll', scrollHeader);

    /* ACCORDION CURSOS */
    const cursosContent = document.getElementsByClassName('cursos__content'),
        cursosContentHeader = document.querySelectorAll('.cursos__content-header');

    function accordionCursos() {
        let itemClass = this.parentNode.className;

        for (let i = 0; i < cursosContent.length; i++) {
            cursosContent[i].className = 'cursos__content cursos-close';
        }

        if (itemClass === 'cursos__content cursos-close') {
            this.parentNode.className = 'cursos__content cursos-open';
        }
    }

    cursosContentHeader.forEach(el => {
        el.addEventListener('click', accordionCursos);
    });

    /* PAGINATION SWIPER */
    const swiperHouses = new Swiper('.swiper', {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
});
