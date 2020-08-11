const { joke } = require("express");
const axios = require('axios');

function jokes(category){
    axios.get('https://sv443.net/jokeapi/v2/joke/' + category).then(joke => {
        var JOKE;
        if (joke.data.type == "single"){
            JOKE = joke.data.joke;
        }
        else{
            JOKE = {
                "setup": joke.data.setup,
                "delivery": joke.data.delivery
            }
        }
        var joke_obj = {
            "category": joke.data.category,
            "type": joke.data.type,
            "joke": JOKE,
            "id": joke.data.id,
            "language": joke.data.lang
        };
        console.log(joke_obj);
    });
}

jokes("Miscellaneous");