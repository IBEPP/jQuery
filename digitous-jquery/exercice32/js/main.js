$("button").click(function(){
    $.ajax({
        url: "https://restcountries.com/v3.1/name/france",
        success: function (data, status, response){
            console.log(data[0].name.common)
            console.log(data[0].capital)
        }
    })
})