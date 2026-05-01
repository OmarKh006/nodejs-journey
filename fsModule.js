const { readFileSync, writeFileSync } = require("node:fs");

const first = readFileSync("./folder/first.txt", "utf-8");
const second = readFileSync("./folder/second.txt", "utf-8");

console.log({ first, second });

writeFileSync("./folder/writeFileSync.txt", "Second attempt using 'a' flag", {
  flag: "a",
});
