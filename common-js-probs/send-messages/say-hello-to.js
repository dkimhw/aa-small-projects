import sayMessage from "../messages/say-message.js";

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

export default sayHelloTo;
