(function ($, Modernizr, window, document){
    var menu;

    $(function () {
        // DOM ready
        var burger = $('[data-burger]');
        menu = $('[data-menu]');

        mobileMenu();
        initContentSlider();
        demoIframeSetup();

        burger.on('touchstart click', handleMenuClick);
        window.addEventListener('resize', mobileMenu);
    });


    /**
     * Initializes the content slider on the home page
     * @return {null}
     */
    function initContentSlider() {
        setTimeout(function () {
            $('[data-slider]').flexslider({
                animation: 'slide',
                customDirectionNav: $('.slider-controls a')
            });
        }, 500);
    }


    /**
     * Animates the opening and closing of the hamburger menu
     * @return {null}
     */
    function mobileMenu() {
        // CSS and JS desktop breakpoint should match
        var isDesktop = Modernizr.mq('(min-width: 700px)');

        menu[ isDesktop ? 'slideDown' : 'slideUp' ](300);
        menu.css('display', isDesktop ? 'block' : 'none');
    }

    function handleMenuClick (evt) {
        var isOpen = this.classList.contains('is-active');
        this.classList[ isOpen ? 'remove' : 'add' ]('is-active');
        menu[ isOpen ? 'slideUp' : 'slideDown' ](300);

        evt.preventDefault();
    }

    /**
     * Sets up the iframe demos using Fancybox
     * @return {null}
     */
    function demoIframeSetup() {
        $(".fancybox").fancybox({
            width: '900px',
            height: '550px',
            openEffect: 'elastic',
            closeEffect: 'fade',
            overlayOpacity: '0.2',
            helpers:{
                title: {
                    type: 'inside'
                },
                overlay:{
                    css: {
                        'background-color': 'rgba(0,0,0,0.6)'
                    }
                }
            }
        });
    }

    // when disabling default iOS a:active highlight, this allows custom :active styles to show
    document.addEventListener('touchstart', function() {}, true);

})(window.jQuery, window.Modernizr, window, document);
