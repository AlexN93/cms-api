/**
 * Common Course validation logic.
 */

module.exports = {

  /**
   * Validates new course data.
   *
   * @param      {Object}   data   Course data.
   * @return     {boolean}  True if the data is correct.
   */

  validateNewCourse: function (data) {
    var errors = {};

    if (!data.name || data.name.trim() === '') {
      errors['name'] = 'name field required or is not valid';
    }

    return errors;
  },

};
