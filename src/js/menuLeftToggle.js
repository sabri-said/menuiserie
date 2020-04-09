function menuLeftToggle() {

    var openMenu = $('#menu-left-toggle');
    var closeMenu = $('#close-menu-left');
    var menu = $('#menu-left');
    var menuLinks = $('#menu-left ul a');

    openMenu.click(function() {
        menu.css({
            'width': '100%'
        });
        menuLinks.css({
            'font-size': '3rem'
        });
    });

    closeMenu.click(function() {
        menu.css({
            'width': '0'
        });
        menuLinks.css({
            'font-size': '0'
        });
    });
};