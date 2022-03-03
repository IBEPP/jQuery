/*
 * on commence par une variable qui stockera l'URL:
 * https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=b
 * Cette URL nous permet de récupérer les détails d'un films (ce n'est pas une API de streaming)
* 
* 1) On veut récupérer le champ input de la barre de recherche.
* 1) On veut créer un écouteur d'événement sur les touches appuyées dans la barre de recherche.
* 3) Dans cet écouteur d'événement on veut:
* 	a) on fait une concatenation de l'URL avec la valeur saisi par l'utilisateur  et
* 	b) lancer une requete grâce à ajax sur cet nouvelle URL
 *  c) Dans la fonction de success:
 *    - On stock le lien pour recuperer l'image : https://image.tmdb.org/t/p/w500/
 *    - on récupère la zone d'affichage 
 *    - on remet la zone d'affichage à 0, car on veut effacer les recherches
 *          precedentes
 *    - on parcourt les résultats et on les affiches dans la zone de texte avec
 *      le l'image, le titre, la description
 * */

// let url = "https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=b" + $("input").val();



// let URL =  "https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=";

// $("input[type=\"search\"]").keyup(function() {
//     let query = URL + $("input").val();
//     console.log(query);
//     $.ajax({
//         url: query,
//         success: function(data) {
//             let movies = data.results;
//             let contentText = '';

//             for (let i = 0; i < movies.length; i++) {
//                 let movie = movies[i];
//                 let image_url = "https://image.tmdb.org/t/p/w500/";
//                 contentText += `
//                     <div class="card">
//                         <img src="${image_url+movie.poster_path}" alt=""/>
//                         <h3>${movie.title}</h3>
//                         <p>${movie.overview}<p>
//                     </div>
//                 `;
//             }
//             $("#content").html(contentText)

//         }
//     })
// })

// let URL = "https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=b" + $("input").val();
let url = "https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=";
// $("input").val()

$("input").keyup(function() {
    let URL = url + $("input").val();
    $.ajax({
        url: URL,
        success: function(data){
            let movies = data.result;
            
            let textSpace = "";

            for(let i = 0; i < movies.length; i++){
                
                let movie = movies[i];

                let img = "https://image.tmdb.org/t/p/w500";

                textSpace += 

                `<div class="card">

                <img src"${img + movie.poster_path}" alt""/>

                    <h3>${movie.title}</h3>
                    
                <p>${movie.overview}<p>

            </div>
            `;
            }
            
            $("#content").html(textSpace)
            
            
            
        }
    })
})
























// let url = "https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=b" + $("input").val();

// $("button").keyup(function(){
//     let jquery = url + $("button").val()
//     $.ajax({
//         url: jquery,
//         success: function(data){
//             let movies = data.result;
//             let content_text = "";
//             for (let movies of movies ){
//                 console.log("Movies: " , movies);
//                 let image_url
//             }
//             console.log(data,"https://image.tmdb.org/t/p/w500/api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=")
        
//         }
//     })
// })
