// validate contact form
$(function() {
    $('#myform').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "come on, you have a name don't you?",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "no email, no message"
            },
            message: {
                required: "um...yea, you have to write something to send this form.",
                minlength: "thats all? really?"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"./php/process.php",
                success: function() {
                    $('#myform').fadeOut();
                    $('#success').fadeIn();
                    $('#myform')[0].reset();
                    setTimeout("jQuery('#success').fadeOut()", 2000);
                    setTimeout("jQuery('#myform').fadeIn()", 2000);
            
                },
                error: function() {
                    $('#myform').fadeOut();
                    $('#error').fadeIn();

                }
            });
        }
    });
});