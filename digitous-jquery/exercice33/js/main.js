$("button").click(function() {
    $.ajax({
        url: "https://restcountries.com/v3.1/name/france",
        success: function(data, status, response){
            $("#country").html("France").toggle()
            $("#capital").html("Paris").toggle()
        }
    })
})




// $("button").click(function() {
//     $("#country").html("France").toggle()
//     $("#capital").html("Paris").toggle()
// })




