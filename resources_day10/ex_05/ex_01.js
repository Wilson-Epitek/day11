async function promiseMe(promise) {
  let result = await new Promise((resolve, reject) => {
    resolve(`I promise you to${promise}`);
  });
  return resutl;
}
promiseMe("fly to the moon").then((value) => {
  console.log(value);
});
