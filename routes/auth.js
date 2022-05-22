const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/Authcontroller");

router.post("/register-student", async (req, res) => {
  await register(req, "student", res);
});

router.post("/register-faculty", async (req, res) => {
  await register(req, "faculty", res);
});

router.post("/register-admin", async (req, res) => {
  await register(req, "admin", res);
});
router.post("/login", async (req, res) => {
  await login(req, res);
});
module.exports = router;
