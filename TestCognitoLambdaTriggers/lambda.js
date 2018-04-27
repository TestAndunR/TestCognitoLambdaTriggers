let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	context.succeed(event);
	console.log("Post Authentication Trigger Success");

	callback(null,'Successfully executed');
}