$(window).scroll(function() {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    
    if ($(window).scrollTop() > 100) {
        $('body').addClass('nav-hidden');
    }

    else {
        $('body').removeClass('nav-hidden');
    }
});

$(".full img").click(function() {
  $(".full img").toggleClass('zoom');
});

MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']],
        processEscapes: true,
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre']
      }
    });