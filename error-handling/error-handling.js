// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (error) {
    console.error(error);
  }

  return sum;
}

let res = sum(null);
console.log(res);

// 2.
// tests
sayName = (name) => {
  if (typeof name === 'string') {
    console.log(name);
  } else {
    throw new Error("Invalid name! Must be a string!")
  }
}
sayName("Alex");
sayName(1);
// Your code here

// 3.
function greet(greeting) {
  console.log('greet', greeting)
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

greet(false)
