const express = require("express");
const router = express.Router();

// routes   GET api/profiles/test
// desc     Tests post route
// access   Public/Private


router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
