$('#name1').blur(function () {
    $(this).removeClass();
    var nameLength = $(this).val().length;
    if (nameLength <= 1) {
        $(this).addClass('notValid');
        $(this).next().text('Enter your Name');
    } else {
        $(this).addClass('Valid');
        $(this).next().text('');
    }
});

$('#name2').blur(function () {
    $(this).removeClass();
    var nameLength = $(this).val().length;
    if (nameLength <= 1) {
        $(this).addClass('notValid');
        $(this).next().text('Enter your Surname');
    } else {
        $(this).addClass('Valid');
        $(this).next().text('');
    }
});

$('#login').blur(function () {
    $(this).removeClass();
    var loginL = $(this).val().length;
    if (loginL <= 1) {
        $(this).addClass('notValid');
        $(this).next().text('Enter your Login');
    } else {
        $(this).addClass('Valid');
        $(this).next().text('');
    }
});

$('#pas1').blur(function () {
    $(this).removeClass();
    var pas1 = $(this).val();
    var nameLength = $(this).val().length;
    if (nameLength <= 6) {
        $(this).addClass('notValid');
        $(this).next().text('Length of password is less than 12 symbols');
    } else if (!/[A-Z]/.test(pas1)) {
        $(this).addClass('notValid');
        $(this).next().text('Password has no big letters');
    }
    else if (!/[a-z]/.test(pas1)) {
        $(this).addClass('notValid');
        $(this).next().text('Password has no small letters');
    }
    else {
        $(this).addClass('Valid');
        $(this).next().text('');
    }
});

$('#pas2').blur(function () {
    $(this).removeClass();
    if ($(this).val() != ($('#pas1').val())) {
        $(this).addClass('notValid');
        $(this).next().text('Passwords mismatch');
    } else {
        $(this).addClass('Valid');
        $(this).next().text('');
    }
});

$('#phone').blur(function () {
    $(this).removeClass();
    var phoneV = $(this).val();
    var phoneL = $(this).val().length;
    if (!/[0-9]/.test(phoneV)) {
        $(this).addClass('notValid');
        $(this).next().text('Only numbers');
    } else if (phoneL <= 5) {
        $(this).addClass('notValid');
        $(this).next().text('Enter your phone number');
    } else {
        $(this).addClass('Valid');
        $(this).next().text('');
    }
});

$('#email').blur(function () {
    $(this).removeClass();
    var emailV = $(this).val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(emailV)) {
        $(this).addClass('Valid');
        $(this).next().text('');
    } else {
        $(this).addClass('notValid');
        $(this).next().text('Enter your email');
    }
});

$('#code').blur(function () {
    $(this).removeClass();
    var codeL = $(this).val().length;
    if (codeL < 1) {
        $(this).addClass('notValid');
        $(this).next().text('Enter the Code');
    } else {
        $(this).addClass('Valid');
        $(this).next().text('');
    }
});

$('#accept').focus(function () {
    $(this).removeClass();
    var acceptV = $(this).val();
    if (acceptV != 'on') {
        $(this).addClass('notValid');
        $(this).next().text('You have to accept the rules');
    } else {
        $(this).addClass('Valid');
        $(this).next().text('');
    }
});

$('#regForm').submit(function (event) {
    $('span').each(function () {
        if ($.trim($(this).text()) != "") {
            event.preventDefault();
        }
    });
});