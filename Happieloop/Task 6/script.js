document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // Deactivate all tab buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the selected tab content
            document.getElementById(tabId).style.display = 'block';

            // Activate the clicked tab button
            button.classList.add('active');
        });
    });
});
