const express = require('express');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim());
    lines.shift();

    let numberOfStudents = 0;
    const fields = {};

    lines.forEach((line) => {
      const student = line.split(',');
      const firstName = student[0].trim();
      const field = student[student.length - 1].trim();

      numberOfStudents += 1;

      if (!fields[field]) {
        fields[field] = { count: 0, firstNames: [] };
      }
      fields[field].count += 1;
      fields[field].firstNames.push(firstName);
    });

    let output = `Number of students: ${numberOfStudents}\n`;
    for (const [field, info] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${info.count}. List: ${info.firstNames.join(', ')}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let filename = process.argv[2];
  if (!filename) filename = 'database.csv';
  await countStudents(filename)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
