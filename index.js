const promise = new Promise((resolve, reject) => {
  let err = true; //Switch this varible to test the promise results
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
