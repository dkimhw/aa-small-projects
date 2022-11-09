import sayHelloTo from "./say-hello-to.js";

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");


export default giveMessageToMrsPotato;
