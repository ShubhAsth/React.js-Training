const arr = [1, 2, 3, 4, 5];

async function printWithDelay(array) {
  for (const element of array) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(element);
  }
}

printWithDelay(arr);
