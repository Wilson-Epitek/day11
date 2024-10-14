async function initializeMachine(machineName, timeRequired) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${machineName} initialized`);
    }, timeRequired * 1000);
  });
}
initializeMachine("Computer", 3).then(console.log);
