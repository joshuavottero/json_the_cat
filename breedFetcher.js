
const request = require("request");



const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, Response, body) => {
    if (error !== null) {
      return callback(error);
    }
    const data = JSON.parse(body);
  
    if (data[0]) {
      return callback(null,data[0]["description"]);
    } else {
      return callback("breed not found");
    }
     
  });
};


// fetchBreedDescription(breed, (error, description) => {
  
// });
module.exports = {fetchBreedDescription};
