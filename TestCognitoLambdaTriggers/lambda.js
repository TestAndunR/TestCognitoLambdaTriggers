let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	context.succeed(event);
	console.log("Custom Message Trigger Success");

	callback(null,'Successfully executed');
}