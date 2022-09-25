/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here

const reverse = (str) => {
  // Base case
  if (str.length === 0) return '';

  // Recursive case
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

console.log(reverse("house")); // "esuoh"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
