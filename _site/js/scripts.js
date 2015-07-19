(function ($, Modernizr, window, document){
    // CSS and JS desktop breakpoint should match
    var isDesktop = Modernizr.mq('(min-width: 700px)');
    var isMobile = !isDesktop;

    $(function () {
        // DOM ready
        mobileMenu();
    });


    /**
     * Animates the opening and closing of the hamburger menu
     * @return {null}
     */
    function mobileMenu() {
        if (isDesktop) {
            return;
        }

        var menu = $('[data-menu]');
        var burger = $('[data-burger]');

        burger.on('touchstart click', function (evt) {
            var isOpen = this.classList.contains('is-active');
            this.classList[ isOpen ? 'remove' : 'add' ]('is-active');
            menu[ isOpen ? 'slideUp' : 'slideDown' ](300);

            evt.preventDefault();
        });
    }

})(window.jQuery, window.Modernizr, window, document);
