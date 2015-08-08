(function ($, Modernizr, window, document){
    // CSS and JS desktop breakpoint should match
    var isDesktop = Modernizr.mq('(min-width: 700px)');

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

    // when disabling default iOS a:active highlight, this allows custom :active styles to show
    document.addEventListener('touchstart', function() {}, true);

    // Demo iframes
    $(".fancybox").fancybox({
        // width: '70%',
        // height: '70%',
        width: '900px',
        height: '550px',
        // margin: [120,20,30,20],
        openEffect:"elastic",
        closeEffect:"fade",
        overlayOpacity:"0.2",
        helpers:{
            title: {
                type:"inside"
            },
            overlay:{
                css: {
                    "background-color":"rgba(0,0,0,0.6)"
                    // "background-color":"rgba(80,21,186,0.6)"
                }
            }
        }
    });
})(window.jQuery, window.Modernizr, window, document);
