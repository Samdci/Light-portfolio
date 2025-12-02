// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth scroll for Back-to-Top button
const backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Handle contact form submission
document.querySelector('.contact-form').addEventListener('submit', event => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    emailjs.sendForm('service_59gbqot', 'template_jaik4ih', form)
        .then(() => {
            alert('Message sent successfully!');
            form.reset();
        })
        .catch(error => {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        });
});