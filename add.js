const fs = require("fs");

const addTaskHandler = argv => {
  const newQ = {
    id: 1,
    quote: argv.cytat,
    author: argv.autor,
    group: argv.grupa
  };
  console.log(argv);
  fs.readFile("quotes.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      const fileParse = JSON.parse(data);
      const fileSort = fileParse.sort(function(a, b) {
        return a.id - b.id;
      });
      for (let i = 0; i < fileSort.length; i++) {
        if (fileSort[i].id === newQ.id) {
          newQ.id = fileSort[i].id + 1;
        }
      }
      fileSort.push(newQ);
      fs.writeFile("quotes.json", JSON.stringify(fileSort), () => {
        console.log("cytat został zapisany");
      });
    }
  });
};

module.exports = {
  command: "dodaj <cytat> <autor> <grupa>",
  desc: "Dodawanie cytatu do listy",
  handler: addTaskHandler
};
