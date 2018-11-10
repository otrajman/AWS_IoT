const deviceModule = require('aws-iot-device-sdk').device;

function processTest(args) {
  //console.log(JSON.stringify(args, null, 2));
  const device = deviceModule({
    keyPath: args.privateKey,
    certPath: args.clientCertificate,
    caPath: args.caCertificate,
    clientId: args.clientId,
    region: args.region,
    baseReconnectTimeMs: args.baseReconnectTimeMs,
    keepalive: args.keepAlive,
    protocol: args.protocol,
    port: args.port,
    host: args.hostName,
    debug: args.debug
  });

  //device.subscribe('arn:aws:iot:us-east-1:262059861873:thing/Test_Thing_1/foo');
  setInterval(() => {
  const now = new Date().getTime();
  const msg = {
    key:`${now}`,
    message:`${now}`,
  };

  const test = {
    "serialNumber": "G030MD046237U80H",
    "batteryVoltage": "1576mV",
    "clickType": "TEST"
  }

  device.publish('topic_1', JSON.stringify(test), (e) => {
      console.log(`sent ${JSON.stringify(test)}`);
    });
  }, Math.round(Math.random() * 5 * 1000));

  /*device.on('connect', () => {
    console.log('connect');
      });

  device.on('error', function(error) {
     console.error('error', error);
  });

  device.on('message', (t, p) => {
    console.log(`${t}: ${JSON.stringify(p)}`);
  });*/
}

const cmd = require('commander');

if (require.main === module) {
  processTest(cmd
    .option('--host-name [value]')
    .option('--private-key [value]')
    .option('--client-certificate [value]')
    .option('--ca-certificate [value]')
    .option('--client-id [value]')
    .option('--region [value]')
    .option('--base-reconned-time-ms <n>')
    .option('--keep-alive <n>')
    .option('--protocol [value]')
    .option('--port <n>')
    .option('--debug')
    .parse(process.argv));
}
