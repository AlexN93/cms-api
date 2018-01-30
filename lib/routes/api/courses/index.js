/**
 * Courses endpoints.
 */

const express = require('express');
const router = express.Router();
const db = require('../../../models');
const service = require('../../../services/courses.service')(db);

const createCourse = require('./create-course')(service);
const getCourses = require('./get-courses')(service);
const getCourse = require('./get-course')(service);
const updateCourse = require('./update-course')(service);
const deleteCourse = require('./delete-course')(service);

module.exports = () => {

  /**
   * @api {post} / Create new course
   * @apiName CreateCourse
   * @apiGroup Courses
   *
   * @apiHeader Content-Type (application/json)
   *
   * @apiParam {String} name        Name of course.
   *
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *   {
   *     "name": "course1",
   *     "guides": [],
   *     "_id": "59766db3118c621e244291ad"
   *   }
   */
  router.post('/',
    createCourse
  );

  /**
   * @api {get} / Get all courses.
   * @apiName GetCourses
   * @apiGroup Courses
   *
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *   [{
   *     "_id": "5a6f654c5c87263d80bf7b37",
   *     "name": "course1"
   *   },
   *   {
   *     "_id": "59766a78118c621e244291ac",
   *     "name": "course2"
   *   }]
   */
  router.get('/',
    getCourses
  );

  /**
   * @api {get} /:id Get course by ID.
   * @apiName GetCourse
   * @apiGroup Courses
   *
   * @apiParam {String} id          Id of course.
   *
   * @apiSuccessExample {json} Success
   *  HTTP/1.1 200 OK
   *   {
   *     "_id": "59766a6a118c621e244291ab",
   *     "name": "course1",
   *     "guides": [
   *       {
   *         "_id": "5a6f6583317d8026bcc4ad8b",
   *         "title": "title1",
   *         "url": "https://www.youtube.com/watch?v=bBTXs_5n-T4",
   *         "duration": 109
   *       }
   *     ]
   *   }
   */
  router.get('/:id',
    getCourse
  );

  /**
   * @api {put} / Update course.
   * @apiName UpdateCourse
   * @apiGroup Courses
   *
   * @apiHeader Content-Type (application/json)
   *
   * @apiParam {String} id          Id of course.
   * @apiParam {String} name        Name of course.
   *
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *   {
   *     "_id": "59766a6a118c621e244291ab",
   *     "name": "course1",
   *   }
   */
  router.put('/:id',
    updateCourse
  );

  /**
   * @api {delete} /:id Delete course.
   * @apiName DeleteCourse
   * @apiGroup Courses
   *
   * @apiParam {String} id          Id of course.
   *
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   */
  router.delete('/:id',
    deleteCourse
  );

  return router;

};
