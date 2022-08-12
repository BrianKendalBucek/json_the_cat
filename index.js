const { fetchBreedDescription } = require('./breedFetcher');

const breedDescription = process.argv[2];

//CAllBACK
fetchBreedDescription(breedDescription, (error, description) => {
  if (error) {
    console.log("Error calling function, ", error);
  } else {
    console.log(`Breed description: ${description}`);
  }
});