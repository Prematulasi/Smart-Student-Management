const router =
require("express").Router();

const {
getJobs,
addJob
}
=
require(
"../controllers/jobController"
);

router.get(
"/",
getJobs
);

router.post(
"/",
addJob
);

module.exports = router;