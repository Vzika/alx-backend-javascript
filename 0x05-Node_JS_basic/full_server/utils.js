const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim());
    lines.shift();

    const studentsByField = {};

    lines.forEach((line) => {
      const student = line.split(',');
      const firstName = student[0];
      const field = student[3];

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
