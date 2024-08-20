const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split the data into lines and filter out any empty lines
    const lines = data.split('\n').filter((line) => line.trim());

    // Remove the header line
    lines.shift();

    // Initialize counters for students and fields
    let numberOfStudents = 0;
    const fields = {};

    // Process each line
    lines.forEach((line) => {
      const student = line.split(',');
      const firstName = student[0].trim();
      const field = student[student.length - 1].trim();

      // Count the student
      numberOfStudents += 1;

      // Count the student by field
      if (!fields[field]) {
        fields[field] = { count: 0, firstNames: [] };
      }
      fields[field].count += 1;
      fields[field].firstNames.push(firstName);
    });

    // Log the total number of students
    console.log(`Number of students: ${numberOfStudents}`);

    // Log the number of students in each field
    for (const [field, info] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${info.count}. List: ${info.firstNames.join(', ')}`);
    }
  } catch (error) {
    // If the file cannot be read, reject the Promise with an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
