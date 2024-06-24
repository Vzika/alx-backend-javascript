/*
 * Run "npm run dev maintest/12-main.js" to test
*/
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(list) {
      return Object.keys(list).length;
    },
  };
}
