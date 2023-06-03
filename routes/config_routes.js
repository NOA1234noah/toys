const indexR = require("./index");
const usersR = require("./users");
const toysR = require("./toy");

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/toys",toysR)
}