/*
 * Run "npm run dev maintest/11-main.js" to test
*/
export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: [...employees],
  };

  return employeesObject;
}
