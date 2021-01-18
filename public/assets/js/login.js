$(document).ready(function () {

    const email = $("#email")
    const password = $("#password")
    const submitButton = $("#Submit")


    submitButton.on('click', function () {
        console.log("this was clicked")


        $.ajax("/login", {
            type: "POST",
            data: {
                email: email.val(),
                password: password.val()
            }
        }).then(function () {
            console.log("Yes")
        })





    })

























})