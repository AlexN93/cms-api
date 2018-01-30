/**
 * Guide business logic layer.
 */

const debug = require('debug')('cms-api:guides.service');
const validation = require('../utils/guide-validation');

const createGuide = (db) => {

  const Guide = db.Guide;
  const Course = db.Course;

  return async (data, fn) => {
    const errors = validation.validateNewGuide(data);
    if (Object.keys(errors).length > 0) {
      let err = new Error('Guide validation failed');
      err.status = 400;
      err.errors = errors;
      return fn(null, err);
    }

    let course = await Course.findOne({_id: data.course_id}).exec();
    if (!course) {
      let err = new Error('Course not found');
      err.status = 404;
      err.errors = {course: 'Course not found'};
      return fn(null, err);
    }

    data.course = data.course_id;
    delete data.course_id;
    let guide = await Guide.create(data);

    course.guides.push(guide);
    course.save();

    fn(null, guide);
  };
};

const getAllGuides = (db) => {

  const Guide = db.Guide;

  return (fn) => {

    debug(`Getting all guides`);

    Guide.find({}, '_id title url duration', fn);

  };

};

const getGuideByID = (db) => {

  const Guide = db.Guide;

  return (id, fn) => {

    debug(`Retrieving guide with id ${id}`);

    Guide.findOne({_id: id}, '_id title url duration', fn);

  };

};

const updateGuide = (db) => {

  const Guide = db.Guide;

  return (id, data, fn) => {

    debug(`Updating guide with id ${id}`);

    delete data.course;
    Guide.findOneAndUpdate({_id: id}, data, {'fields': { '_id':1, 'title': 1, 'url': 1, 'duration': 1 }, new: true}, fn);
  };

};

const deleteGuide = (db) => {

  const Guide = db.Guide;

  return (id, fn) => {

    debug(`Deleting guide with id ${id}`);

    Guide.remove({_id: id}, fn);

  };

};

module.exports = (db) => {

  return {

    /**
     * Creates new guide.
     */
    createGuide: createGuide(db),

    /**
     * Gets all guides.
     */
    getAllGuides: getAllGuides(db),

    /**
     * Gets guide by ID.
     */
    getGuideByID: getGuideByID(db),

    /**
     * Update guide.
     */
    updateGuide: updateGuide(db),

    /**
     * Deletes guide.
     */
    deleteGuide: deleteGuide(db),
  };

};
