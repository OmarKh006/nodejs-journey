const os = require("node:os");

const user = os.userInfo();

console.log(user);

console.log(`System uptime in sec : ${os.uptime()}`);

const myCurrentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(myCurrentOS);
