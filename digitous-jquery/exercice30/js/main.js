$("input").keyup(function() {
    $("input").removeClass("is-valid")
    $("input").removeClass("is-invalid")

    if($("input").val().length >= 5){
        $("input").addClass("is-valid")
    } else {
        $("input").addClass("is-invalid")
    }
})