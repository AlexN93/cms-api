/**
 * Create new course.
 */

module.exports = (service) => {

  return (req, res, next) => {

    service.createCourse(req.body, (err, data) => {
      if (err) return next(err);

      res.send(data);
    });
  };
};
