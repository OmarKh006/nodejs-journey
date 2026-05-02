const fs = require("fs");

console.log("1. start"); // sync → runs immediately

setTimeout(() => console.log("2. timeout"), 0); // timers phase

fs.readFile("file.txt", () => {
  console.log("3. file read done"); // poll phase

  setImmediate(() => console.log("4. immediate inside I/O")); // check phase
});

setImmediate(() => console.log("5. immediate")); // check phase

console.log("6. end"); // sync → runs immediately
