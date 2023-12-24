const UserService = require("../services/user-service");

UserService;

const userService = new UserService();

signUpUser = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.signUp(data);

    return res.status(201).json({
      success: true,
      message: "successfully signup the user !!!",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error !! while signup the user",
      data: {},
      error: error.message,
    });
  }
};

signInUser = async (req, res) => {
  try {
    const data = req.body;
    const response = await userService.signIn(data);

    return res.status(201).json({
      success: true,
      message: "successfully signIn the user !!!",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error !! while signIn the user",
      data: {},
      error: error.message,
    });
  }
};

module.exports = {
  signUpUser,
  signInUser,
};
