document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Simulate form submission (you can replace this with actual AJAX code)
        setTimeout(function () {
            alert('Form submitted successfully!');
            contactForm.reset();
        }, 1000);
    });
});
