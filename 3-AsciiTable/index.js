const Table = require("ascii-table");

const example = new Table()
    .setTitle("Title")
    .setHeading("AAAAAAAAAAAAAAAAAAAAAAAH")
    .addRow("HEHE")
    .setAlignCenter(0);


console.log(example.toString());