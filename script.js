$(document).ready(function () {
    $("#name_button").click(function (e) {
        e.preventDefault();
        $("#table").html("")
        const name = $("#name_input").val()
        console.log(name)
        for (var i = 0; i < name.length; i++) {
            $("#table").append(`<tr id='tr-${i}'></tr>`)
            for (j = 0; j < name.length; j++) {
                $(`#tr-${i}`).append(`<td id='td-${j}'>${i}:${j}</td>`)
            }
        }
    });
});