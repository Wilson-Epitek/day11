async function caca() {
  let result = await new Promise((resolve, reject) => {
    resolve("Hello World");
  });
  return result;
}

caca().then((result) => {
  console.log(result);
});
