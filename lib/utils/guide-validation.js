/**
 * Common Guide validation logic.
 */

module.exports = {

  /**
   * Validates new guide data.
   *
   * @param      {Object}   data   Guide data.
   * @return     {boolean}  True if the data is correct.
   */

  validateNewGuide: function (data) {
    var errors = {};

    if (!data.title || data.title.trim() === '') {
      errors['title'] = 'title field required or is not valid';
    }

    if (!data.url || data.url.trim() === '') {
      errors['url'] = 'url field required or is not valid';
    }

    if (!data.course_id || data.course_id.trim() === '') {
      errors['course_id'] = 'course_id field required or is not valid';
    }
    else if(!data.course_id.match(/^[0-9a-fA-F]{24}$/)) {
      errors['course_id'] = 'course_id field is not valid';
    }

    if (!data.duration) {
      errors['duration'] = 'duration field required or is not valid';
    }

    return errors;
  },

};
