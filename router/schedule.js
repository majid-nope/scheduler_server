const router = require("express").Router();
const schedule = require("../controllers/schedule");

router.route("/").get(schedule.get);

module.exports = router;
