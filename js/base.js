(function($) {
    $(document).ready(function () {
        $('.hamburger ul ul').before('<div class="toggle-sub"></div>');
        $('.hamburger .toggle').click(function(e) {
            e.preventDefault();
            $('.hamburger').toggleClass('open');
        });
        $('.hamburger .toggle-sub').click(function(e) {
            e.preventDefault();
            $(this).parent().toggleClass('open');
        });
    });
})(jQuery);
