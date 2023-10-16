$('.img').data('rotate', 0);
setInterval(() => {
    deg = $('.img').data('rotate') + 15;
    $('.img').data('rotate', deg);
    $('.img').animate({rotate: `${deg}deg`});
}, 2000);