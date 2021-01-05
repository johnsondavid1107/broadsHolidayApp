$(document).ready(function () {

    var person = $("#person");
    let saveIcon = $("#saveIcon")
    let textArea = $("#textArea")
    let group = $(".list-group")

    $.ajax("/api/entries", {
        type: "GET"
    }).then(function (response) {


        for (let i = 0; i < response.Entries.length; i++) {
            let dataInfo = response.Entries[i].person
            let newLiItem = $("<li>")
            newLiItem.addClass("list-group-item")
            newLiItem.html(dataInfo)
            newLiItem.attr("data", response.Entries[i].id)
            $(".list-group").append(newLiItem)

        }



    })


    saveIcon.on("click", function (event) {
        event.preventDefault();
        let personContent = person.val().trim();
        let textAreaContent = textArea.val().trim();

        $.ajax("/createNote", {
            type: "POST",
            data: {
                person: personContent,
                entry: textAreaContent
            }

        }).then(function (res) {
            console.log('put successfull')
            console.log(res)
            console.log(res.id)

            let newLiItem = $("<li>")
            newLiItem.addClass("list-group-item")
            newLiItem.html(personContent)
            newLiItem.attr("data", res.id)
            $(".list-group").append(newLiItem)
            location.reload();
        })



        person.val("");
        textArea.val("");
        console.log(group.length)


    })






















})