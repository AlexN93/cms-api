/**
 * Delete specified guide
 */

module.exports = (service) => {

  return (req, res, next) => {

    service.deleteGuide(req.params.id, (err, data) => {
      if (err) return next(err);

      if (!data) {
        return res.status(404).end();
      }

      res.send(data);
    });
  };
};
