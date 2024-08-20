const express = require('express');
const AppController = require('../controllers/AppController'); // Assuming the AppController file path is correct
const StudentsController = require('../controllers/StudentsController'); // Assuming the StudentsController file path is correct

const router = express.Router();

// Link the route '/' to the AppController
router.get('/', AppController.getHomepage);

// Link the routes '/students' and '/students/:major' to the StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
