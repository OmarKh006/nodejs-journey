const path = require("node:path");

console.log(path.sep);

const filePath = path.join("/folder", "subFolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname, "folder", "subFolder", "text.txt");
console.log(absolutePath);
