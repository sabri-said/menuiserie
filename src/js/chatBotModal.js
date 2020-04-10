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

function chatBotInteraction() {

    var chatBoxButton = $('#message-send');

    chatBoxButton.click(function() {

        var inputMessageChatBox = $('#user_message').val();

        $('#chat-bot').find('.body').append("<div class='message-chat'>" + inputMessageChatBox + "</div>");

        if (inputMessageChatBox.match(/\?/) != undefined) {
            var answer = "En éspérant que les liens ci dessous puissent vous aider:";
            var linkAdvise = "<ul class='link-advise'><li><a href=''>A propos</a></li> <li><a href=''>Nos réalisations</a></li>  <li><a href=''>Contact</a></li></ul>";
            $('#chat-bot').find('.body').append(
                "<div class='message-chat'>" + answer + linkAdvise +
                "</div>"
            );
        } else {
            var answerError = "Notre système de chatBot est en cours de développement merci de reformuler votre question";

            $('#chat-bot').find('.body').append(
                "<div class='message-chat'>" + answerError +
                "</div>"
            );
        };

    });



};