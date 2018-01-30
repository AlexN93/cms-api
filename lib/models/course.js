/**
 * Course model.
 */

const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: true},
  guides: [{ type: Schema.Types.ObjectId, ref: 'Guide' }]
}, { versionKey: false, collection: 'courses' });

// courseSchema.pre('remove', function(next) {
//   Guide.remove({course: this._id}).exec();
//   next();
// });

module.exports = mongoose.model('Course', courseSchema);
