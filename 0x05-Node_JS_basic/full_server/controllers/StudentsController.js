const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      let filename = process.argv[2];
      if (!filename) {
        filename = 'database.csv';
      }
      const studentsByField = await readDatabase(filename);
      let output = 'This is the list of our students\n';

      Object.entries(studentsByField).sort().forEach(([field, students]) => {
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      let filename = process.argv[2];
      if (!filename) {
        filename = 'database.csv';
      }
      const studentsByField = await readDatabase(filename);
      const field = req.params.major;

      if (field !== 'CS' && field !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      if (studentsByField[field]) {
        const students = studentsByField[field];
        const output = `List: ${students.join(', ')}`;

        res.status(200).send(output);
      } else {
        res.status(500).send('Cannot load the database');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
