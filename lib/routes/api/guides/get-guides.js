/**
 * GET all guides.
 */

module.exports = (service) => {

  return (req, res, next) => {

    service.getAllGuides((err, data) => {
      if (err) return next(err);

      if (!data) {
        return res.status(404).end();
      }

      res.send(data);
    });
  };
};
