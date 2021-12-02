
const { fetchBreedDescription } = require("./breedFetcher");
let terminalArgs = process.argv.slice(2);
const breed = terminalArgs[0];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});