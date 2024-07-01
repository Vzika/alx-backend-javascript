export default function getStudentIdsSum(arrayOfStudents) {
  if (!Array.isArray(arrayOfStudents)) return [];

  const StudentIdsSum = arrayOfStudents.reduce((acc, student) => student.id + acc, 0);
  return StudentIdsSum;
}
