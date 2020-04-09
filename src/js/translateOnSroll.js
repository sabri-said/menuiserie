function translateOnScrollToRight(target) {

    $(window).scroll(function() {

        var scrollPos = $(window).scrollTop()
        scrollPos = scrollPos.toString()

        target.forEach(element => {
            $(element).css({
                'transform': 'translate(' + scrollPos + 'px'
            })
        });
    })
}

function translateOnScrollToLeft(target) {

    $(window).scroll(function() {

        var scrollPos = $(window).scrollTop()
        scrollPos = scrollPos.toString()
        target.forEach(element => {
            $(element).css({
                'transform': 'translate(-' + scrollPos + 'px'
            })
        });

    })
}


function valuePropositionAppear() {


    setTimeout(() => {
        $('#value-proposition').find('h1').css({
            'width': '75%',
            'font-size': '3rem'
        })
    }, 6000);

};