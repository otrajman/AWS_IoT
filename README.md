# AWS_IoT
Demo of using AWS IoT buttons / Lambda / Dynamodb / Simple analysis and graph

1. Install node

2. Get certificates from https://console.aws.amazon.com/iot/home?region=us-east-1#/connectdevice/

3. Upload lambda.js to your lambda function

4. Create dynamoddb table and put the name in your lambda function

5. Add permissions for lambda to write to dynamodb

6. Add IoT thing rule as input to lambda

7. Run start.sh, replacing the command line arguments with your certificates and endpoints

Generate will create "clicks" every ~5s.
