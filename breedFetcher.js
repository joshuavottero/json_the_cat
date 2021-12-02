const request = require("request");
let terminalArgs = process.argv.slice(2);
const breed = terminalArgs[0];

// https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const requestHtml = function(url) {
  request(url, (error, Response, body) => {
    if (error !== null) {
      console.log("Error: ", error);
      return;
    }
    const data = JSON.parse(body);
  
    if (data[0]) {
      console.log(data[0]["description"]);
      return;
    }
    console.log("error breed not found");
     
  });
};

requestHtml(url);

