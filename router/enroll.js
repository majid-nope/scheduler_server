const router = require("express").Router();

const enroll = require("../controllers/enroll");

router.route("/").post(enroll);

module.exports = router;
