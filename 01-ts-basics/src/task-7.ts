function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

console.log("Task 7: ");

getMessage().then((result) => console.log(result));

console.log("");
