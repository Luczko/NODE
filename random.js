const fs = require("fs");

const getListHandler = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const fileParse = JSON.parse(data);
      const randomQuote =
        fileParse[Math.floor(Math.random() * fileParse.length)];
      console.log("Cytat:", randomQuote.quote, "Autor:", randomQuote.author);
    }
  });
};

module.exports = {
  command: "losuj",
  desc: "Wyświetl losowy cytat",
  handler: getListHandler
};
