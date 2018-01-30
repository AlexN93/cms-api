/**
 * GET course by ID.
 */

module.exports = (service) => {

  return (req, res, next) => {

    service.getCourseByID(req.params.id, (err, data) => {
      if (err) return next(err);

      if (!data) {
        return res.status(404).end();
      }

      res.send(data);
    });
  };
};