# stop script on error
set -e

# Check to see if root CA file exists, download if not
if [ ! -f ./root-CA.crt ]; then
  printf "\nDownloading AWS IoT Root CA certificate from AWS...\n"
  curl https://www.amazontrust.com/repository/AmazonRootCA1.pem > root-CA.crt
fi

# install AWS Device SDK for NodeJS if not already installed
if [ ! -d ./node_modules ]; then
  printf "\nInstalling AWS SDK...\n"
  npm install aws-iot-device-sdk
fi

# run pub/sub sample app using certificates downloaded in package
#printf "\nRunning pub/sub sample application...\n"
#node node_modules/aws-iot-device-sdk/examples/device-example.js --host-name=a29ylun8967ag7-ats.iot.us-east-1.amazonaws.com --private-key=Test_Thing_1.private.key --client-certificate=Test_Thing_1.cert.pem --ca-certificate=root-CA.crt --client-id=sdk-nodejs-d1667de3-0f37-42b1-8987-42249a0f7583 $@

#node node_modules/aws-iot-device-sdk/examples/thing-example.js --host-name=a29ylun8967ag7-ats.iot.us-east-1.amazonaws.com --private-key=Test_Thing_1.private.key --client-certificate=Test_Thing_1.cert.pem --ca-certificate=root-CA.crt --client-id=sdk-nodejs-d1667de3-0f37-42b1-8987-42249a0f7583

node generate.js --host-name=a29ylun8967ag7-ats.iot.us-east-1.amazonaws.com --private-key=Test_Thing_1.private.key --client-certificate=Test_Thing_1.cert.pem --ca-certificate=root-CA.crt --client-id=sdk-nodejs-d1667de3-0f37-42b1-8987-42249a0f7583
