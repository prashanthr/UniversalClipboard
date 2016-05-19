var mongoose = require('mongoose');
module.exports = mongoose.model ('Clipboard', {
	data: String
});