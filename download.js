const request = require("request");
const url = `http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php`;

const getListHandler = () => {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const quote = JSON.parse(body);
      console.log("Cytat:", quote.quote, "Autor:", quote.author);
    } else {
      console.log("błąd pobierania danych");
    }
  });
};

module.exports = {
  command: "pobierz",
  desc: "Wyświetl pobrany cytat",
  handler: getListHandler
};
