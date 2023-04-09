const { log } = require("console");
const app = require("../engine");

const server = require("http")
  .createServer(app)
  .listen(process.env.PORT || 4000);

const onError = () => console.log("something went wrong");
const onListen = () =>
  console.log(`server listening on port ${server.address().port}`);

server.on("listening", onListen).on("error", onError);
