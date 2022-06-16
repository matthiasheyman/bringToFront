import process from 'node:process';
import bringToFront from './index.js';

setTimeout(() => console.log(bringToFront(process.pid)), 2000);

