/*
 * Run "npm run dev maintest/100-main.js" to test
*/
export default function createIteratorObject(report) {
  return [].concat(...Object.values(report.allEmployees));
}
