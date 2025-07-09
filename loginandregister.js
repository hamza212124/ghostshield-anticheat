function showNotification(duration, text) {
    const $notification = $('#notification');
    const $circle = $('.circle_fg');

    $notification.fadeIn(500);
    $('#txt_notify').text(text)

    $circle.css('stroke-dashoffset', '0');
    
    setTimeout(() => {
        $notification.fadeOut(() => {
            $circle.css('stroke-dashoffset', '100');
        });
    }, duration);
}

function handleLogin() {
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1346563214808191016&response_type=code&redirect_uri=https%3A%2F%2Flifeshield.tech%2Fdiscord%2Fauth%2Fdiscord%2Fcallback&scope=identify+guilds+email+guilds.join+gdm.join';
}

// $(document).ready(function() {
//     showNotification(5000, "Password is not correct, please try again");
// });

$(document).ready(function() {
    $('.login-button').on('click', function(event) {
        event.preventDefault();
        handleLogin();
    });
    $('.have-account').on('click', function(event) {
        event.preventDefault();
        handleLogin();
    });
});
