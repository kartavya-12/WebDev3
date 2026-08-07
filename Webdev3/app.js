// const cities = require("./data/data.js");
// console.log(cities);

// const fs = require("fs");
// fs.writeFileSync("test.txt","hello world");

// const path = require("path");
// const filename = path.join(__dirname, "data", "test.txt");
// console.log(filename);

// const os = require("os");
// const userInfo = os.userInfo();
// const freeMemory = os.freemem();
// const totalMemory = os.totalmem();
// const uptime = os.uptime();

// console.log("User Info:", userInfo);
// console.log("Free Memory:", freeMemory);
// console.log("Total Memory:", totalMemory);
// console.log("Uptime:", uptime);

// const chalk = require("chalk");
// import chalk from "chalk";
// console.log(chalk.blue("hello world"));
// console.log(chalk.red("Error: Something went wrong!"));
// console.log(chalk.green("Success: Operation completed successfully!"));
// console.log(chalk.yellow("Warning: Please check your input."));

require("dotenv").config();
const process = require("process");
// const name = process.argv[2];
// console.log(name);
console.log(process.env.PORT);
