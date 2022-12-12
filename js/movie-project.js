
// Loading page
$(window).on('load', function () {
    $('#loading').hide();
    alert("Loading page");
})

//set variables for the project
const messageArea = document.getElementById("show");
const input = document.getElementById("addNew");
const rate = document.getElementById("rating");
const btn = document.getElementById("submit");
btn.addEventListener("click", () => {
    const newMovie = {
        title: input.value,
        rating: rate.value
    }
    fetch(`https://ossified-wiggly-tarantula.glitch.me/movies`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie),
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            messageArea.innerText = "Request Successful! Check console for your information.";
        });
        });

fetch("https://vast-organic-farm.glitch.me/movies/7", {
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(edittedMovie)
}).then(() => fetch("https://vast-organic-farm.glitch.me/movies")).then(resp => resp.json()).then(movies => console.log(movies));































// // Loading page
// $(window).on('load', function () {
//     $('#loading').hide();
// })
//
//
//
// // Loading page
// //     $(window).on('load', function () {
// //         $('#loading').hide();
// //     })
//
//
// const moviesAPI = 'https://ossified-wiggly-tarantula.glitch.me/movies';
// let moviesClone = []
//
//
// fetch(moviesAPI)
//     .then((response) => response.json())
//     .then((jsonData) => console.log(jsonData))
//
//
// //Get all
// function getMovies() {
//     return fetch(moviesAPI).then((callJson) => callJson.json());
// }
//
//
// //Display data
//
// fetch(moviesAPI)
//     .then((callForJson) => {
//         return callForJson.json();
//     }).then((movies) => {
//     moviesClone = movies
//     console.log(movies[0])
//     for (var i = 0; i <= 13; i++) {
//         $("#movie").append(
//             "<div class='card col-lg-3 m-2 text-center'><h2 class='card-title'>" + movies[i].title + "</h2>"
//             + "<img class='img-fluid'  src='" + movies[i].poster + "'>"
//             + "<p>" + "Rating: " + movies[i].rating + "</p>"
//             + "<p>" + "Genre: " + movies[i].genre + "</p>"
//             + "<button class='delete'  data-id='" + movies[i].id + "'>" + "Delete Movie" + "</button>"
//             + "<button class='edit' data-index='" + i + "' type='button' class='btn' data-toggle='modal'>" + "Edit Movie" + "</button></div>")
//         // console.log($('.edit'))
//         $('.edit').click(function (e) {
//             var index = $(this).data('index')
//             console.log(index)
//             e.preventDefault()
//             let editTitle = $('#newTitle').val(movies[index].title)
//             let editGenre = $('#newGenre').val(movies[index].genre)
//             let editRating = $('#newRating').val(movies[index].rating)
//
//             console.log(editTitle)
//             let editMovieObj = {
//                 title: editTitle ,
//                 rating: editGenre,
//                 genre: editRating
//             }
//             // return editMovie(editMovieObj)
//         })
//
//         $(".delete").click(function(){
//             var id = $(this).data("id")
//             console.log(id)
//             deleteMovie(id)
//         })
//     }
//
// });
// // $('.delete').on("click", function() {console.log(this)
// //     var id = $(this).data('id')
// //     console.log(id)
// //     deleteMovie(id)
// // });
// //      $(".delete").click(function(){
// //         var id = thisOne.getAttribute("data-id")
// //         console.log(id)
// //         deleteMovie(id)
// //     })
// // console.log($('.edit'))
// //     $('.edit').click(function () {
// //         var index = $(this).data('index')
// //         console.log(index)
// //         e.preventDefault()
// //         // let editTitle = $('#newTitle').val()
// //         // let editGenre = $('#newGenre').val(movies[index].genre)
// //         // let editRating = $('#newRating').val(movies[index].rating)
// //         // editTitle.val(movies[i].title)
// //         // let editMovieObj = {
// //         //     title: editTitle ,
// //         //     rating: editGenre,
// //         //     genre: editRating
// //         // }
// //         // return editMovie(editMovieObj)
// //     })
//
//
// //Get a by ID
// function getMovie(id) {
//     return fetch('${moviesAPI/id}')
//         .then((callJson) => callJson.json());
// }
//
//
// //function(11)
//
// function editMovie(movies) {
//     let options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movies)
//     }
//     let num = parseInt(movies.id)
//     return fetch(`${moviesAPI}` + "/" + num , options)
//         .then((callJson) => callJson.json())
// }
//
// // Delete by
// function deleteMovie(id) {
//     let options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }
//     fetch(`${moviesAPI}/${id}`, options)
//         .then((callJson) => console.log("Delete movie" + id, callJson))
// }
//
// //
//
//
// // Create Movie
// function addMovie(movie) {
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movie)
//     }
//     return fetch(`${moviesAPI}`, options)
//         .then((callJson) => callJson.json())
//         .then((parsedData) => console.log(parsedData))
//
// }
//
// $('#submitNewMovie').click(function (e) {
//     e.preventDefault()
//     let newTitle = $('#newTitle').val()
//     let newGenre = $('#newGenre').val()
//     let newRating = $('#newRating').val()
//
//     let newMovieObj = {
//         title: newTitle,
//         rating: newRating,
//         genre: newGenre
//     }
//     return addMovie(newMovieObj)
// })
//
//
// const moviesAPI = 'https://hilarious-tame-jay.glitch.me/movies';
//
// // Loading page icon
// $(window).on('load', function () {
//     $('#loading').hide();
// })
//
// fetch(moviesAPI)
//     .then((response) => response.json())
//     .then((jsonData) => renderMovies(jsonData))
//
// // Render Movie cards
// function renderMovies(){
//     fetch(moviesAPI)
//         .then((callForJson) => {
//             return callForJson.json();
//         }).then((movies) => {
//         $("#movie").html('');
//         for (let i = 0; i <= 13; i++) {
//             $("#movie").append(
//                 "<div class='card shadow-box col-lg-3 m-2 text-center card-bg text-light'>"
//                 + "<div class='card-header'>" + movies[i].title + "</div>"
//                 + "<img class='img-fluid'  src='" + movies[i].poster + "' style='height: 20em; width: 15em' alt='Movie Poster'>"
//                 + "<div class='card-body'><p>" + movies[i].rating + "/5 <i class=\"bi bi-star-fill\"></i></p>"
//                 + "<p>" + "Genre: " + movies[i].genre + "</p></div>"
//                 + "<div class='card-footer'><div class='delete btn btn-light btn-outline-secondary m-1' data-id='" + movies[i].id + "'>" + "<i class=\"bi bi-trash\"></i>" + "</div>"
//                 + "<div class='edit btn btn-light btn-outline-secondary m-1' data-index='" + i + "'>" + "<i class=\"bi bi-tools\"></i>" + "</div></div></div>")
//
//             $('.edit').click(function (e) {
//                 const index = $(this).data('index');
//                 e.preventDefault()
//
//                 $('#editTitle').val(movies[index].title)
//                 $('#editGenre').val(movies[index].genre)
//                 $('#editRating').val(movies[index].rating)
//                 $('#idHidden').val(movies[index].id)
//             })
//
//             $('.delete').click(function () {
//                 console.log("delete listener")
//                 const id = $(this).data('id');
//                 deleteMovie(id).then(function (){
//                     renderMovies()
//                 })
//             });
//         }
//     });
// }
//
//
// // Edit Movie
// function editMovie(movie) {
//     let options = {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movie)
//     }
//     console.log(`${moviesAPI}/${movie.id}`)
//     return fetch(`${moviesAPI}/${movie.id}`, options)
//         .then((callJson) => callJson.json())
// }
//
// // Delete Movie
// function deleteMovie(id) {
//     let options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }
//     return fetch(`${moviesAPI}/${id}`, options)
//         .then((callJson) => console.log("Delete movie" + id, callJson))
// }
//
// // Create Movie
// function addMovie(movie) {
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movie)
//     }
//     return fetch(`${moviesAPI}`, options)
//         .then((callJson) => callJson.json())
//         .then((parsedData) => console.log(parsedData))
//
// }
//
//
// // Add Movie button event listener
// $('#submitNewMovie').click(function (e) {
//     e.preventDefault()
//     let newTitle = $('#newTitle').val()
//     let newGenre = $('#newGenre').val()
//     let newRating = $('#newRating').val()
//
//     let newMovieObj = {
//         title: newTitle,
//         rating: newRating,
//         genre: newGenre,
//         poster: "https://m.media-amazon.com/images/I/51+j8eMdK2L._AC_SL1000_.jpg"
//     }
//     return addMovie(newMovieObj).then(function (){
//         renderMovies()
//     })
// })
//
// // Edit Movie button event listener
// $('#modMovie').click(function (e) {
//     e.preventDefault()
//
//     let editTitle = $('#editTitle').val()
//     console.log(editTitle);
//     let editGenre = $('#editGenre').val()
//     let editRating = $('#editRating').val()
//     let editId = $("#idHidden").val()
//
//     let editMovieObj = {
//         title: editTitle,
//         rating: editRating,
//         genre: editGenre,
//         id: editId
//     }
//     console.log(editMovieObj);
//
//     return editMovie(editMovieObj).then(function (){
//         renderMovies()
//     })
// })
