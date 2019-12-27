const fs = require("fs");

const getListHandler = () => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const fileParse = JSON.parse(data);
      fileParse.forEach(e => {
        console.log(
          "id:",
          e.id,
          "Cytat:",
          e.quote,
          "Autor:",
          e.author,
          "Rodzaj:",
          e.group
        );
      });
      // console.log(JSON.parse(data));
    }
  });
};

module.exports = {
  command: "lista",
  desc: "Wyświetl wszystkie cytaty",
  handler: getListHandler
};
