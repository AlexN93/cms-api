/**
 * Guide model.
 */

const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const guideSchema = new Schema({
  title: { type: String, required: true},
  url: { type: String, required: true},
  duration: {type: Number, required: true},
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
}, { versionKey: false, collection: 'guides' });

// guideSchema.index({ title: 1 });

module.exports = mongoose.model('Guide', guideSchema);
