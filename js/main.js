(function ($, Modernizr, window, document){
    var menu;

    $(function () {
        // DOM ready
        //var burger = $('[data-burger]');
        menu = $('[data-menu]');

        //mobileMenu();
        //initContentSlider();
        demoIframeSetup();

        codeTabs();

        //burger.on('touchstart click', handleMenuClick);
        window.addEventListener('resize', mobileMenu);
    });

    // Enable language-specific code tabs
    function codeTabs() {
        var counter = 0;
        var langImages = {
            "scala": "img/scala-sm.png",
            "python": "img/python-sm.png",
            "java": "img/java-sm.png"
        };
        $("div.codetabs").each(function() {
            $(this).addClass("tab-content");

            // Insert the tab bar
            var tabBar = $('<ul class="nav nav-tabs" data-tabs="tabs"></ul>');
            $(this).before(tabBar);

            // Add each code sample to the tab bar:
            var codeSamples = $(this).children("div");
            codeSamples.each(function() {
                $(this).addClass("tab-pane");
                var lang = $(this).data("lang");
                var image = $(this).data("image");
                var notabs = $(this).data("notabs");
                var capitalizedLang = lang.substr(0, 1).toUpperCase() + lang.substr(1);
                var id = "tab_" + lang + "_" + counter;
                $(this).attr("id", id);
                if (image != null && langImages[lang]) {
                    var buttonLabel = "<img src='" +langImages[lang] + "' alt='" + capitalizedLang + "' />";
                } else if (notabs == null) {
                    var buttonLabel = "<b>" + capitalizedLang + "</b>";
                } else {
                    var buttonLabel = ""
                }
                tabBar.append(
                    '<li><a class="tab_' + lang + '" href="#' + id + '">' + buttonLabel + '</a></li>'
                );
            });

            codeSamples.first().addClass("active");
            tabBar.children("li").first().addClass("active");
            counter++;
        });
        $("ul.nav-tabs a").click(function (e) {
            // Toggling a tab should switch all tabs corresponding to the same language
            // while retaining the scroll position
            e.preventDefault();
            var scrollOffset = $(this).offset().top - $(document).scrollTop();
            $("." + $(this).attr('class')).tab('show');
            $(document).scrollTop($(this).offset().top - scrollOffset);
        });
    }

    /**
     * Initializes the content slider on the home page
     * @return {null}
     */
    //function initContentSlider() {
    //    setTimeout(function () {
    //        $('[data-slider]').flexslider({
    //            animation: 'slide',
    //            customDirectionNav: $('.slider-controls a')
    //        });
    //    }, 500);
    //}


    /**
     * Animates the opening and closing of the hamburger menu
     * @return {null}
     */
    //function mobileMenu() {
    //    // CSS and JS desktop breakpoint should match
    //    var isDesktop = Modernizr.mq('(min-width: 700px)');
    //
    //    menu[ isDesktop ? 'slideDown' : 'slideUp' ](300);
    //    menu.css('display', isDesktop ? 'block' : 'none');
    //}
    //
    //function handleMenuClick (evt) {
    //    var isOpen = this.classList.contains('is-active');
    //    this.classList[ isOpen ? 'remove' : 'add' ]('is-active');
    //    menu[ isOpen ? 'slideUp' : 'slideDown' ](300);
    //
    //    evt.preventDefault();
    //}

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
