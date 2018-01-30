/**
 * Guides endpoints.
 */

const express = require('express');
const router = express.Router();
const db = require('../../../models');
const service = require('../../../services/guides.service')(db);

const createGuide = require('./create-guide')(service);
const getGuides = require('./get-guides')(service);
const getGuide = require('./get-guide')(service);
const updateGuide = require('./update-guide')(service);
const deleteGuide = require('./delete-guide')(service);

module.exports = () => {

  /**
   * @api {post} / Create new guide
   * @apiName CreateGuide
   * @apiGroup Guides
   *
   * @apiHeader Content-Type (application/json)
   *
   * @apiParam {String} title       Title of guide.
   * @apiParam {String} url         Url of guide.
   * @apiParam {Number} duration    Duration of guide.
   * @apiParam {String} course_id   Course ID.
   *
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *   {
   *     "title": "guide1",
   *     "url": "https://www.youtube.com/watch?v=bBTXs_5n-T4",
   *     "duration": 109,
   *     "course_id": "59766db3118c621e244291bs",
   *     "_id": "59766db3118c621e244291ad"
   *   }
   */
  router.post('/',
    createGuide
  );

  /**
   * @api {get} / Get all guide.
   * @apiName GetGuides
   * @apiGroup Guides
   *
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *   [{
   *     "_id": "5a6f72a7f0a089176c60218c",
   *     "title": "guide1",
   *     "url": "https://www.youtube.com/watch?v=bBTXs_5n-T4",
   *     "duration": 110
   *   }]
   */
  router.get('/',
    getGuides
  );

  /**
   * @api {get} /:id Get guide by ID.
   * @apiName GetGuide
   * @apiGroup Guides
   *
   * @apiParam {String} id          Id of guide.
   *
   * @apiSuccessExample {json} Success
   *  HTTP/1.1 200 OK
   *   {
   *     "_id": "59766a6a118c621e244291ab",
   *     "title": "guide1",
   *     "url": "https://www.youtube.com/watch?v=bBTXs_5n-T4",
   *     "duration": 109
   *   }
   */
  router.get('/:id',
    getGuide
  );

  /**
   * @api {put} / Update guide.
   * @apiName UpdateGuide
   * @apiGroup Guides
   *
   * @apiHeader Content-Type (application/json)
   *
   * @apiParam {String} id          Id of guide.
   * @apiParam {String} name        Name of guide.
   *
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *   {
   *     "_id": "59766a6a118c621e244291ab",
   *     "title": "guide1",
   *     "url": "https://www.youtube.com/watch?v=bBTXs_5n-T4",
   *     "duration": 110
   *   }
   */
  router.put('/:id',
    updateGuide
  );

  /**
   * @api {delete} /:id Delete guide.
   * @apiName DeleteGuide
   * @apiGroup Guides
   *
   * @apiParam {String} id          Id of guide.
   *
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   */
  router.delete('/:id',
    deleteGuide
  );

  return router;

};
