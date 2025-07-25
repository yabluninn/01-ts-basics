function getFirstElement<T>(arr: Array<T>): T {
  return arr[0];
}

console.log("Task 6:");

console.log(getFirstElement<number>([1, 2, 3])); // 1
console.log(getFirstElement<string>(["a", "b", "c"])); // "a"
console.log(getFirstElement<boolean>([true, false, true])); // true

console.log("");
