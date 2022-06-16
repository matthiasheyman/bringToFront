import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const nativeBringToFront = require('./build/Release/bringToFront.node');

function bringToFront(pid) {
	return nativeBringToFront.pidToFront(pid);
}

export default bringToFront;
