export default function updateStudentGradeByCity(arrayOfStudents, city, newGrades) {
  if (!Array.isArray(arrayOfStudents)) return [];
  if (typeof city !== 'string') throw new TypeError('city must be a string');
  if (!Array.isArray(newGrades)) return [];

  return arrayOfStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
