const os = require('os');
const formatDate = require('./index');

const uptime = formatDate(3600);

console.log(`Current uptime is ${uptime}`);
