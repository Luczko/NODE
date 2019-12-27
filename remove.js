const fs = require("fs");

const addTaskHandler = argv => {
  console.log(argv);
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const fileParse = JSON.parse(data);
      const fileFiltr = fileParse.filter(e => {
        if (e.id != argv.numer) {
          return e;
        }
      });
      fs.writeFile("quotes.json", JSON.stringify(fileFiltr), () => {
        console.log(`cytat numer ${argv.numer} został usunięty`);
      });
    }
  });
};

module.exports = {
  command: "usun <numer>",
  desc: "Usuwanie cytatu z listy",
  handler: addTaskHandler
};
