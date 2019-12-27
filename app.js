const addCommand = require("./add");
const listCommand = require("./list");
const removeCommand = require("./remove");
const showCommand = require("./show");
const randomCommand = require("./random");
const downloadCommand = require("./download");

require("yargs")
  .command(addCommand)
  .command(removeCommand)
  .command(listCommand)
  .command(showCommand)
  .command(randomCommand)
  .command(downloadCommand)
  .demandCommand(1, "Musisz podać przynajmniej jedno polecenie")
  .help().argv;
