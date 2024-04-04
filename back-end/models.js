// models.js
const mongoose = require('mongoose');

// Schema for SelectedValues collection
const selectedValuesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	values: [{ type: String }],
	Name: { type: String},
	Email: { type: String },
});

// Model for SelectedValues collection
const SelectedValues = mongoose.model('SelectedValues', selectedValuesSchema);

// Export the models
module.exports = {
  SelectedValues,
};
