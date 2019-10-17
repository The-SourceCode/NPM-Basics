const AsciiTable = require('ascii-table');

const simpleTable = new AsciiTable("Simple Table")
    .addRow(1, "Earth", "Dead")
    .addRow(2, "Mars", "Elon Musk");
console.log(simpleTable.toString());

let i = 0;
const autoIncrementTable = new AsciiTable("Auto Increment")
    .addRow(++i, "This is 1", i) // ++i increment first then display number
    .addRow(++i, "This is 2", i)
    .addRow(i++, "etc", i); // i++ first display number then increment
console.log(autoIncrementTable.toString());

const noTitle = new AsciiTable()
    .addRow("What?", "No Title?")
    .addRow(["What?", "Using arrays?"])
    .setBorder("*"); // Change border
console.log(noTitle.toString());

const headingsAlignment = new AsciiTable()
    .setTitle("Headings")
    .setHeading("Age", "Name", "Country")
    .addRow("18", "Jack", "USA")
    .addRow(["29", "Daeshan", "US of A"])
    .setAlignCenter(0)
    .setAlignCenter(1)
    .setAlign(2, AsciiTable.CENTER);
console.log(headingsAlignment.toString());

const sorting = new AsciiTable("Sorting Time!").setHeading("Index", "Random #", "Useless");
for (let i = 0; i < 5; i++) sorting.addRow(i, Math.floor(Math.random() * 10), "Extra");
console.log(sorting.toString()); // Unsorted table
sorting.sort((a, b) => b[0] - a[0]); // Sorting by column #1 (descending)
console.log(sorting.toString());
sorting.sort((a, b) => a[1] - b[1]); // Sorting by column #2 (ascending)
console.log(sorting.toString());
