async function promiseMe(message) {
  return new Promise((resolve, reject) => {
    resolve(`I promise to ${message}`);
  });
}

async function checkStatus(promise) {
  try {
    console.log(await promise);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Checking status over");
  }
}
checkStatus(promiseMe("fly to the moon"));
