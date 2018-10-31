// File: static/js/app.js
(function() {
    'use strict';

    var pusher = new pusher('PUSHER_APP_KEY', {
        authEndpoint: '/pusher/auth',
        cluster: 'PUSHER_APP_CLUSTER',
        encrypted: true
    });

// ---------------------------------------------------
// Chat Details
// ---------------------------------------------------

let chat = {
    name: undefined,
    email: undefined,
    myChanel: undefined,
}

// ------------------------------------------------------
// Target Elements
// ------------------------------------------------------


const chatPage = $(document)
const chatWindow = $('.chatbubble')
const chatHeader = chatWindow.find('.unexpanded')
const chatBody = chatWindow.find('.chat-window')

// -----------------------------------------------------
// Register helpers
// -----------------------------------------------------

let helpers = {

    // ------------------------------------------------
    // Toggles the display of the chat window
    // ------------------------------------------------

    ToggleChatWindow: function () {
        chatWindow.toggleClass('opened')
        chatHeader.find('.title').text(
            chatWindow.hasClass('opened') ? 'Minimize Chat Window' : 'Chat with Support'
        )
    },

    // -------------------------------------------------------------------
    // Show the appropriate display screen. Login screen or Chat screen
    // -------------------------------------------------------------------

    
}



})