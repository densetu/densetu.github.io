$(document).ready(function ($) {
  var toggle = $('.nav-toggle');
  var menu = $('.nav-menu');
  toggle.click(function() {
    $(this).toggleClass('is-active');
    menu.toggleClass('is-active');
  });
  //メッセージ
  $('.message').each(function(){
    var message = $(this);
    message.css("max-height",message.innerHeight());
    message.height($(".message-header",message).innerHeight());
  });
  $('.message-header').click(function() {
    var messageHeader = $(this);
    var message = $(messageHeader.parent().get(0));
    if (messageHeader.innerHeight() == message.height() && message.css("max-height")){
      message.height(message.css("max-height"));
    }else{
      message.height(messageHeader.innerHeight());
    }
  });

});
