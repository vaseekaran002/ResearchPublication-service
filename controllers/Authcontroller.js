const bcryptjs = require("bcryptjs");
const User = require("../models/User");

const register = async (req, role, res) => {
  try {
    const hasedpass = await bcryptjs.hash(req.body.password, 10);

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hasedpass,
      role: role,
    });
    const response = await user.save();
    res.send(response);
  } catch (e) {
    res.send(e.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      bcryptjs.compare(req.body.password, user.password, (err, data) => {
        if (err) throw err;
        if (data) {
          return res.status(200).json({ msg: "Login success" });
        } else {
          return res.status(401).json({ msg: "Invalid credencial" });
        }
      });
    } else {
      res.json({
        error: "login failed",
      });
    }
  } catch (e) {
    res.json({
      error: "login failed",
    });
  }
};

module.exports = {
  register,
  login,
};
