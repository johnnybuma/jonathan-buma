$(document).ready(function(){
    var from,to,subject,text;
    var to = "johnny.buma@gmail.com";
    $("#send_email").click(function(){
        from=$("#from").val();      
        to= to;
        subject=$("#subject").val();
        text=$("#content").val();
        $("#message").text("Sending E-mail...Please wait");
        $.get("/send",{to:to,subject:subject,text:text},function(data){
        if(data=="sent")
        {
            $("#message").empty().html

		(" Your message has been sent, thank you for your interest !");
        }

});
    });
});
