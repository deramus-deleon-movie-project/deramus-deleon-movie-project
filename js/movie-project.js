
// Loading page
// $(window).on('load', function () {
//     $('#loading').hide();
//     alert("Loading page");
// })

//Setting glitch url to variable URL
// const URL = `https://ossified-wiggly-tarantula.glitch.me/movies`;



console.log("setTimeout() example...");
let cardContainer = $("#card");
let loading = $("#card").html();
const renderMovies = () => {
    fetch("https://ossified-wiggly-tarantula.glitch.me/movies")
        .then(resp => resp.json())
        .then(data => {
            cardContainer.html(loading)
            let html = ' ';
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);

                let title = data[i].title;
                let rating = data[i].rating;
                let id = data[i].id;

                html +=
                    '<div class="card" style="width: 18rem;">' +

                            '<div class="card-body">' +
                                '<h5 class="card-title" id="title">' + title + '</h5>' +
                            '</div>' +
                                '<ul class="list-group list-group-flush">' +
                                    '<li class="list-group-item" id="id">' + id + '</li>' +
                                    '<li class="list-group-item" id="rating">Rating: ' + rating + '</li>' +
                                '</ul>' +
                            '<div class="card-body">' +
                                '<a href="#" class="card-link edit" >Edit</a>' +
                                '<a href="#" class="card-link" id="delete">Delete</a>' +
                            '</div>' +
                    '</div>'

            }
            cardContainer.html(html);
            $(".edit").click(function(e) {
                e.preventDefault();
                $("#edit").val($(this).parent().parent().children().first().children().first().html());
                $("#editRate").val($(this).parent().parent().children().first().next().children().last().html());
                $("#editId").val($(this).parent().parent().children().first().next().children().first().html());

            });
        });
}



const input2 = document.getElementById("edit");
const rate2 = document.getElementById("editRate");
const btn2 = document.getElementById("submit2");
btn2.addEventListener("click", () => {
    const edittedMovie = {
        title: input2.value,
        rating: rate2.value
    }
    console.log(newMovie);
    fetch("https://ossified-wiggly-tarantula.glitch.me/movies",{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(edittedMovie),
    })
        .then(resp => resp.json())
        .then(data => {

            renderMovies(data)
        });
});
// FORM SUBMISSION: EDIT FUNCTION
// On click of "Apply" Button, will create an object with the inputs on the edit form and send to the editMovie() function
// $('#submit2').click(function (e) {
//     e.preventDefault();
//     let title = $('#title').val().html;
//     let rating = $('#rating').val();
//     let id = $('#id').val();
//     let editedMovie = {id, title, rating};
//     console.log(editedMovie);
//     editMovie();
// });

// PATCH REQUEST
// Takes the movie from the Edit Form and uses PATCH to change the values of it's attributes in the JSON file
// const editMovie = (movie) => {
//     let edittedMovie = {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(movie)
//     }
//     return fetch("https://ossified-wiggly-tarantula.glitch.me/movies", options)
//         .then(resp => resp.json())
//         .then(renderMovies)
//         .catch(err => console.error(err));
// }
//
// $('#submit2').click(function (e) {
//               var index = $(this).data.id
//
//              console.log(index)
//             e.preventDefault()
//             let editTitle = $('#title').val
//             let editRating = $('#rating').val(data[index].rating)
//
//             console.log(editTitle)
//             // let editMovieObj = {
//             //     title: editTitle ,
//             //     rating: editRating,
//             //
//             // }
//             //  return editMovie(editMovieObj)
//         })


renderMovies();


//set variables for the project
const input = document.getElementById("addNew");
const rate = document.getElementById("rating");
const btn = document.getElementById("submit");
btn.addEventListener("click", () => {
    const newMovie = {
        title: input.value,
        rating: rate.value
    }
    fetch("https://ossified-wiggly-tarantula.glitch.me/movies",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie),
        })
        .then(resp => resp.json())
        .then(data => {

            renderMovies(data)
            console.log(data);
        });
        });

// function editMe(id){
//     console.log($('#title').val());
//     fetch("https://ossified-wiggly-tarantula.glitch.me/movies/" + id, {
//         method: "PUT",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(
//             {
//                 title:$('#title').val(),
//                 rating: $("#rating").val()
//             }
//         )
//     })
//         .then(response => response.json())
//         .then(json => {
//             $('.card-title').innerText = `${json.title}`
//             $('.card-text').innerText = `${json.overview}`
//         })
// }



//Edit click
// let editTitle = $(".card-title").html()
// let editRate = $(".list-group-item").html
// $("#edit").click(function (){
//     $(this).value().data()
// })



// const messageArea2 = document.getElementById("show2");
// const edit = document.getElementById("edit");
// const editRate = document.getElementById("editRate");
// const btn2 = document.getElementById("submit2");
// btn2.addEventListener("click", () => {
//     const editMovie = {
//         title: edit.value,
//         rating: editRate.value
//     }
//     fetch("https://ossified-wiggly-tarantula.glitch.me/movies",{
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editMovie),
//     })
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data);
//             messageArea2.innerText = "Request Successful! Check console for your information.";
//         });
// });














// function edittedMovies(movies) {
//     let options = {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(movies)
//     }).then(() => fetch("https://ossified-wiggly-tarantula.glitch.me/movies"))
//         .then(resp => resp.json())
//         .then(movies => console.log(movies));
//     let num = parseInt(movies.id)
//     return fetch("https://ossified-wiggly-tarantula.glitch.me/movies" + "/" + num, options)
// }

//
// function editMovie(movies) {
//     let options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movies)
//     }
//     // let num = parseInt(movies.id)
//     return fetch("https://ossified-wiggly-tarantula.glitch.me/movies" + "/" + options)
//         .then((callJson) => callJson.json())
// }
// console.log(editMovie())












































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

