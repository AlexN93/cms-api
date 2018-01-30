/**
 * Update specified guide
 */

module.exports = (service) => {

  return (req, res, next) => {

    service.updateGuide(req.params.id, req.body, (err, data) => {
      if (err) return next(err);

      if (!data) {
        return res.status(404).end();
      }

      res.send(data);
    });
  };
};
