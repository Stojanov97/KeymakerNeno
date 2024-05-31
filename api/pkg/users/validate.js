const UserRegister = {
    email: "required|email",
    username: "required|string",
    admin: "required|boolean",
    password: "required|string",
  };
  
  const UserLogin = {
    email: "required|email",
    password: "required|string",
  };
  
  module.exports = {
    UserRegister,
    UserLogin,
  };