import { Service } from 'node-windows';

// Create a new service object
const svc = new Service({
  name: 'Quickbase Req/Count Form API',
  description: 'API endpoints for Requisition and Count forms in Quickbase.',
  script:
    'C:\\Users\\Administrator\\Desktop\\aaron\\requisitionformapi-main\\dist\\src\\server.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
  svc.start();
  console.log('Started');
});

svc.install();
