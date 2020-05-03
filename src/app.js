const env = require('dotenv').config();
import redirects from './redirects';

let passthrough = process.env.PASSTHROUGH;
console.log(passthrough);