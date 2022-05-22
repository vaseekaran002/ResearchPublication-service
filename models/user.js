const mongoos = require("mongoose");
const schema = mongoos.Schema;

const userSchema = new schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "student",
      enum: ["student", "faculty", "admin"],
    },
  },
  { timestamps: true }
);

const User = mongoos.model("User", userSchema);

module.exports = User;
