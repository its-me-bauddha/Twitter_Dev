const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async signIn(data) {
    try {
      // get the email
      // compare password for authentication
      const email = data.email;
      const currentPassword = data.password;

      const user = await this.userRepository.findBy({ email: email });
      if (!user) {
        throw {
          message: "No user found corresponding to the email",
        };
      }

      if (!user.comparePassword(currentPassword)) {
        throw {
          message: "Incorrect Password ! try again ",
        };
      }

      console.log("user signIn successfully");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
