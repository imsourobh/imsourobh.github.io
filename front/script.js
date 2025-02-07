// script.js
$(document).ready(function () {
    // Show content based on button click
    $('#skills-btn').click(function () {
        $('.hidden').hide();
        $('#skills-content').show();
    });

    $('#projects-btn').click(function () {
        $('.hidden').hide();
        $('#projects-content').show();
    });

    $('#experiences-btn').click(function () {
        $('.hidden').hide();
        $('#experiences-content').show();
    });

    // Handle contact form submission
    $('#contact').on('submit', function (event) {
        event.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        $.post('/submit-contact', { name, email, message })
            .done(function (response) {
                if (response.success) {
                    alert('Message sent successfully!');
                    $('#contact')[0].reset();
                }
            })
            .fail(function () {
                alert('Failed to send message. Please try again.');
            });
    });
});
