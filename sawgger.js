const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "SP24_32_SWD_VinhomeCourtBooking",
    description: "Description",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const routes = ["./index.js"];

swaggerAutogen(outputFile, routes, doc).then(() => {
  require("./index.js"); // Your project's root file
});
