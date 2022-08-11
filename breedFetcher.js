const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, function(error, response, body) {
  if (error) {
    return console.log("URL error", error);
  }
  const data = JSON.parse(body);
  const breed = data[0];

  if (breed) {
    console.log(breed.description);
  } else {
    console.log("Breed not found");
  }

});
