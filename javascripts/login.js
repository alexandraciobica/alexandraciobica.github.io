/**
 * Created by isac on 21/04/2017.
 */
promise = $('#submit').on("click", function (event) {
    event.stopPropagation(); // Stop stuff happening
    event.preventDefault(); // Totally stop stuff happening

    // START A LOADING SPINNER HERE

    var user = {
        username: $("#username").val(),
        password: $("#password").val(),
    };
    console.log(user);
    $.ajax({
        url: 'login',
        data: JSON.stringify(user),
        type: 'POST',
        contentType: "application/json",
        processData: false,
        beforeSend: function (data) {
        },
        success: function (data) {
            //call your jQuery action here
            callPage(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus + ': ' + errorThrown);
        }
    });

});