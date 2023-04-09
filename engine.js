const express = require("express");

const app = express();
const cors = require("cors");
const enrollRouter = require("./router/enroll");
const scheduleRouter = require("./router/schedule");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/enroll", enrollRouter);
app.use("/schedule", scheduleRouter);

module.exports = app;
