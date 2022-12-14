console.log("setTimeout() example...");
let cardContainer = $("#card");
let loading = $("#card").html();
let selectedid;
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
                    `'<div class="card clickMe" id='${id}' style="width: 18rem;">'` +

                            '<div class="card-body">' +
                                '<h5 class="card-title" id="title">' + title + '</h5>' +
                            '</div>' +
                                '<ul class="list-group list-group-flush">' +
                                    '<li class="list-group-item" id="id">' + id + '</li>' +
                                    '<li class="list-group-item" id="rating">Rating: ' + rating + '</li>' +
                                '</ul>' +
                            '<div class="card-body">' +
                                '<a href="#" class="card-link edit" >Edit</a>' +
                                '<a href="#" class="card-link delete">Delete</a>' +
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
            $(`.delete`).click(function(e) {
                e.preventDefault()
                let options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }

                selectedid = $(this).parent().parent().children().first().next().children().first().html()
                console.log(selectedid);

                return fetch("https://ossified-wiggly-tarantula.glitch.me/movies/" + selectedid, options)
                    .then(renderMovies)
                    .catch(err => console.error(err));

            });
            $(`.clickMe`).click(function() {
                selectedid = $(this).attr('id');
                console.log(selectedid);
            })
        });
}

// Takes the movie ID from an edit-button and populates the edit form with the current data for that movie
const input2 = document.getElementById("edit");
const rate2 = document.getElementById("editRate");

// letting the submit button know what data to grab
$(`#submit2`).click(function(){
    populateEdit();
    console.log("fired")
})
//Editing the movie function
function populateEdit() {
    // First, get the information for that movie ID
    const edittedMovie = {
        id: selectedid,
        title: input2.value,
        rating: rate2.value
    }
    fetch("https://ossified-wiggly-tarantula.glitch.me/movies/" + selectedid,{

        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(edittedMovie),
    })
        // Take the movie attributes and set the values within the edit form to match the value of each attribute
        .then(()=> renderMovies())
}

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


// $(`.delete`).click(function(e) {
//     e.preventDefault()
//     let options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }
//
//         selectedid = $(this).attr('id');
//         console.log(selectedid);
//
//     return fetch("https://ossified-wiggly-tarantula.glitch.me/movies/" + selectedid, options)
//         .then(renderMovies)
//         .catch(err => console.error(err));
//
// });

console.log(deleteMovie);
