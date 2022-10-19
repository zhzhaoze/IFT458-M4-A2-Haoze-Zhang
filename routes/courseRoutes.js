const express = require('express');

const router = express.Router();

const courseController = require('../controllers/courseController');
router
  .route('/')
  .get(courseController.getAllcourses)   // get all course list
  .post(courseController.createCourse);  //post func, create new course json

router
  .route('/:id')
  .get(courseController.getcourse)  //get course cross :id
  .patch(courseController.updateCourse)  //update course, use postman(patch)
  .delete(courseController.deleteCourse); //delete course

module.exports = router;

/**
 * api has 4 methods
 * 
 */