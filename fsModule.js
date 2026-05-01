const { readFile, writeFile, write } = require("node:fs");

// const first = readFileSync("./folder/first.txt", "utf-8");
// const second = readFileSync("./folder/second.txt", "utf-8");

// console.log({ first, second });

// writeFileSync("./folder/writeFileSync.txt", "Second attempt using 'a' flag", {
//   flag: "a",
// });

readFile("./folder/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;

  readFile("./folder/second.txt", "utf-8", (err2, data2) => {
    if (err2) {
      console.log(err2);
      return;
    }
    const second = data2;

    writeFile(
      "./folder/asyncResult.txt",
      `This is made with async fn : ${first}, ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result);
      },
    );
  });
});
