// READ the giphy API docs: https://developers.giphy.com/
// declar our variables and select our elements
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = `If4FPGdngpTsmHgNIPB1nbwbXXQVuv8d`
var searchForm = document.querySelector(`#search-form`)
var searchInput = searchForm.querySelector("input")
var results = document.querySelector(`.results`)

// define our functions
function getGifs(path, term) {
    results.innerHTML = ""
    $.ajax({
        type: "GET",
        url: `${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}&q=${term}`,
        datatype: "json",
        success: function (data) {
            console.log(data)
            for (var i = 0; i < data.data.length; i++) {
                results.innerHTML += `
                    <img class= "image" src="${data.data[i].images.preview_gif.url}">
                `
            }
        },
        error: function (error) {
            console.log("There was an error")
        }
    })
}





// call our function add our event listeners
searchForm.addEventListener(`submit`, function (event) {
    event.preventDefault()
    getGifs("search", searchInput.value)
})