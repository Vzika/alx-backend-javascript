/*
 * Run "npm run dev maintest/5-main.js" to test
*/
export default function concatArrays(array1, array2, string) {
  return ([...array1, ...array2, ...string]);
}
