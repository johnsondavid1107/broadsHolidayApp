$(document).ready(function () {

    var person = $("#person");
    let saveIcon = $("#saveIcon")
    let textArea = $("#textArea")


    saveIcon.on("click", function (event) {
        event.preventDefault();

        console.log(person.val().trim());
        let personContent = person.val().trim();
        let textAreaContent = person.val().trim();
        let newLiItem = $("<li>")
        newLiItem.addClass("list-group-item")
        newLiItem.html(personContent)
        $(".list-group").append(newLiItem)



        person.val("");
        console.log(textArea.val().trim());
        textArea.val("");


    })






















})