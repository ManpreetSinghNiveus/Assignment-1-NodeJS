const fs = require("fs");

//Step 2
const promise = new Promise((resolve, reject) => {
  let err = false; //Switch this varible to test the promise results
  if (!err) {
    resolve("Manpreet Singh");
  } else {
    reject("Error");
  }
});

promise.then(
  (value) => {
    console.log("Displaying Message" + " " + value);
  },
  (error) => {
    console.log("Error Occured" + " " + error);
  }
);

//Step 4
const fileName = "createFile.txt";

async function createFile() {
  try {
    await fs.promises.writeFile(fileName, "Assignment Done!"); //Change the content to update file
    console.log("File Created :>> ");
  } catch (err) {
    console.log("error :>> ", err);
  }
}
createFile();
