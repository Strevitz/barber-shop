
(function ($) {
    "use strict";

    // Validate
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    var person = {
        fullName: "Jan Barberski",
        email: "jan.barberski@email.com",
        phone: "+48666666666",
        textContact: "napisz wiadomość..."
    }

    // populate the form
    $('#fullName').val(person.fullName);
    $('#email').val(person.email);
    $('#phone').val(person.phone);
    $('#textContact').val(person.textContact);

    // populate object on submit
    $('#contact-form').submit(function(event) {
        person.fullName = $('#fullName').val();
        person.email = $('#email').val();
        person.phone = $('#phone').val();
        person.textContact = $('#textContact').val();

        event.preventDefault();
    });

})(jQuery);

$(function() {
    // booking calendar settings
    $('#datetimepicker13').datetimepicker({
        inline: true,
        sideBySide: true,
        locale: 'pl',
        stepping: 15,
        minDate: moment(),
        daysOfWeekDisabled: [0],
        disabledHours: [0,1,2,3,4,5,6,7,8,19,20,21,22,23],
    });  

});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-23581568-13');