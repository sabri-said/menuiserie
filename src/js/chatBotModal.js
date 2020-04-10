function displayChatBox() {
    var chatBot = $('#chat-bot')
    var closeChatBot = $('#chat-bot #close')
    var reduceChatBox = $('#chat-bot #minus')
    var questionIcon = $('#question')


    chatBot.css({
        'height': '40rem'
    });


    closeChatBot.click(function() {
        chatBot.css({
            'height': '0'
        });
    })

    reduceChatBox.click(function() {
        chatBot.css({
            'height': '0rem'
        });

        questionIcon.css({
            'display': 'block'
        });
    });

    questionIcon.click(function() {
        chatBot.css({
            'height': '40rem'
        });
        questionIcon.css({
            'display': 'none'
        });
    })
}