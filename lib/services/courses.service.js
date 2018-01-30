/**
 * Course business logic layer.
 */

const debug = require('debug')('cms-api:courses.service');
const validation = require('../utils/course-validation');

const createCourse = (db) => {

  const Course = db.Course;

  return (data, fn) => {

    const errors = validation.validateNewCourse(data);
    if (Object.keys(errors).length > 0) {
      let err = new Error('Course validation failed');
      err.status = 400;
      err.errors = errors;
      return fn(null, err);
    }

    debug(`Creating new course`);

    Course.create(data, fn);
  };
};

const getAllCourses = (db) => {

  const Course = db.Course;

  return (fn) => {

    debug(`Getting all courses`);

    Course.find({}, '_id name', fn);

  };

};

const getCourseByID = (db) => {

  const Course = db.Course;

  return async (id, fn) => {

    debug(`Retrieving course with id ${id}`);

    let course = await Course.findOne({_id: id}).populate('guides', '_id title url duration').exec();

    if (!course) {
      return fn(null, null);
    }

    course = course.toObject();
    course['totalDuration'] = course.guides.reduce((a, c) => { return a + c.duration; }, 0);

    fn(null, course);

  };

};

const updateCourse = (db) => {

  const Course = db.Course;

  return (id, data, fn) => {

    debug(`Updating course with id ${id}`);

    Course.findOneAndUpdate({_id: id}, data, {'fields': { '_id':1, 'name': 1 }, new: true}, fn);
  };

};

const deleteCourse = (db) => {

  const Course = db.Course;

  return (id, fn) => {

    debug(`Deleting course with id ${id}`);

    Course.remove({_id: id}, fn);

  };

};

module.exports = (db) => {

  return {

    /**
     * Creates new course.
     */
    createCourse: createCourse(db),

    /**
     * Gets all courses.
     */
    getAllCourses: getAllCourses(db),

    /**
     * Gets course by ID.
     */
    getCourseByID: getCourseByID(db),

    /**
     * Update course.
     */
    updateCourse: updateCourse(db),

    /**
     * Deletes course.
     */
    deleteCourse: deleteCourse(db),
  };

};
