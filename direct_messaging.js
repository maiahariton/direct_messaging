/**
 * Created by maiahariton on 2/7/16.
 */
$(document).ready(function() {
    $(".send_button").click(function() {
        var message = $("textarea[name=inputMessage]").val();
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if(hours < 10) {
            hours = "0" + hours;
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        $(".messages ul").append("<li class='message sent'><p>" + message + "</p><time>" + hours + ":" + minutes + "</time></li>");
    });
});