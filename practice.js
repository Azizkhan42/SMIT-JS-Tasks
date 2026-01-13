function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("Success")
    }, 4000);
  });
}
let promise = getData(123)
console.log(promise)

