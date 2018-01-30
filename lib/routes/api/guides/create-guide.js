/**
 * Create new guide.
 */

module.exports = (service) => {

  return (req, res, next) => {

    service.createGuide(req.body, (err, data) => {
      if (err) return next(err);

      res.send(data);
    });
  };
};
