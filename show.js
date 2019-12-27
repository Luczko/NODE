const fs = require("fs");

const getListHandler = argv => {
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const fileParse = JSON.parse(data);
      const fileFiltr = fileParse.filter(e => {
        if (e.group === argv.grupa) {
          return e;
        }
      });
      fileFiltr.forEach(e => {
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
    }
  });
};

module.exports = {
  command: "wyswietl <grupa>",
  desc: "Wyświetl cytaty określonego rodzaju",
  handler: getListHandler
};
