export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];
  if (typeof city !== 'string') return 'city must be a string';

  const studentsByLocation = students.filter((student) => student.location === city);
  return studentsByLocation;
}
