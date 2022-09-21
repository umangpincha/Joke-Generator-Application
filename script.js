const joke_container = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = ()=>{
    var joke = fetch(url)
    .then(data => data.json())
    .then(item => {
        joke_container.textContent = item.joke;
    });
}

btn.addEventListener("click" , getJoke);