
$(document).ready(function () {

    const firstName = $("#firstName")
    const lastName = $("#lastName")
    const email = $("#email")
    const password = $("#password")
    const submitButton = $("#Submit")


    submitButton.on('click', function () {
        console.log("this was clicked")
        let user

        $.ajax("/", {
            type: "POST",
            data: {
                firstName: firstName.val(),
                lastName: lastName.val(),
                email: email.val(),
                password: password.val()
            }
        }).then(function () {
            window.location("/login")
            console.log("going to html")
        })





    })































})