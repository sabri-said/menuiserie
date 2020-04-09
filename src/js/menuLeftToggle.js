function menuLeftToggle() {

    var openMenu = $('#menu-left-toggle');
    var closeMenu = $('#close-menu-left');
    var menu = $('#menu-left');
    var menuLinks = $('#menu-left ul a');

    openMenu.click(function() {
        menu.css({
            'width': '66%'
        });
        menuLinks.css({
            'font-size': '1.5rem'
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