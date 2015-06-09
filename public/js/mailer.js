$(document).ready(function(){
    var from,to,subject,text;
    var to = "johnny.buma@gmail.com";
    $("#send_email").click(function(){
        from=$("#from").val();      
        to= to;
        subject=$("#subject").val();
        text= "This message was sent from" + " " + $("#from").val() + " " + $("#content").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get("/send",{from:from,to:to,subject:subject,text:text},function(data){
        if(data=="sent")
        {
            $("#message").empty().html

		(" Your message has been sent, thank you for your interest !");
        }

});
    });
});
