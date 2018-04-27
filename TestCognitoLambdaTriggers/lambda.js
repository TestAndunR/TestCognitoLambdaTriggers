let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	context.succeed(event);
	console.log("Presignup trigger success");

	callback(null,'Successfully executed');
}