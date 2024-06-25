const fs = require("fs");

const userName = "Donavan";

fs.writeFile("user-data.txt", "Name: " + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Success");
});
