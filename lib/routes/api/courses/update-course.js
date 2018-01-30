/**
 * Update specified course
 */

module.exports = (service) => {

  return (req, res, next) => {

    service.updateCourse(req.params.id, req.body, (err, data) => {
      if (err) return next(err);

      if (!data) {
        return res.status(404).end();
      }

      res.send(data);
    });
  };
};
