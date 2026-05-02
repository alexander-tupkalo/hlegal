const contactLink = document.querySelector('.js-contact-link');
const pageLoader = document.querySelector('#pageLoader');

if (contactLink && pageLoader) {
    contactLink.addEventListener('click', (event) => {
        event.preventDefault();

        const targetUrl = contactLink.href;

        pageLoader.classList.add('is-active');

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 900);
    });
}