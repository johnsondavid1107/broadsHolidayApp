$(document).ready(function () {

    var person = $("#person");
    let saveIcon = $("#saveIcon")
    let textArea = $("#textArea")


    saveIcon.on("click", function (event) {
        event.preventDefault();
        let personContent = person.val().trim();
        let textAreaContent = textArea.val().trim();
        let newLiItem = $("<li>")
        newLiItem.addClass("list-group-item")
        newLiItem.html(personContent)
        $(".list-group").append(newLiItem)

        $.ajax("/createNote", {
            type: "POST",
            data: {
                person: personContent,
                entry: textAreaContent
            }

        }).then(function (res) {
            console.log('put successfull')
            console.log(res)
        })



        person.val("");
        textArea.val("");


    })






















})