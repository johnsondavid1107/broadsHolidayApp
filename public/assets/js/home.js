$(document).ready(function () {

    var person = $("#person");
    let saveIcon = $("#saveIcon")
    let textArea = $("#textArea")
    let clear = $("#clear")
    let liGroupItem = $(".list-group-item")
    let update = $("#updateIcon")

    clear.on("click", function () {
        person.val("");
        textArea.val("");
    })

    update.on("click", function () {
        let id = person.attr("data-value")

        $.ajax("/notes/" + id, {
            type: "PUT",
            data: {
                person: person.val(),
                entry: textArea.val()
            }
        }).then(function () {
            console.log("success")


        })


    })





    $.ajax("/api/entries", {
        type: "GET"
    }).then(function (response) {


        for (let i = 0; i < response.Entries.length; i++) {
            let dataInfo = response.Entries[i].person
            let newLiItem = $("<li>")
            newLiItem.addClass("list-group-item")
            newLiItem.html(dataInfo)
            newLiItem.attr("value", response.Entries[i].id)
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
            newLiItem.attr("value", res.id)
            $(".list-group").append(newLiItem)
            location.reload();
        })

        person.val("");
        textArea.val("");


    })

    $(".list-group").on("click", ".list-group-item", function (event) {
        let id = $(event.target).text();

        $.ajax("/api/PostEntries", {
            type: "POST",
            data: {
                entry: id
            }
        }).then(function (response) {
            console.log(response)
            person.val(response.person)
            person.attr("data-value", response.id)
            textArea.val(response.entry)


        })
    })




















})