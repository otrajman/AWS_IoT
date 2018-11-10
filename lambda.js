console.log('Loading function');

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});


exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

    const now = `${new Date().getTime()}`;

    var params = {
        TableName: 'test_IOT',
        Item: {
            key:{S:now},
            message:{S:now},
        }
    };

    // Call DynamoDB to add the item to the table
    ddb.putItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });

    return event;  // Echo back the first key value

};

