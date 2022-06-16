import test from 'ava';
import bringToFront from '../index.js';

test('should throw if undefined is passed', t => {
	const error = t.throws(bringToFront);
	t.is(error.message, 'Invalid argument expected pid as number');
});

test('should throw if string is passed', t => {
	const error = t.throws(() => bringToFront('invalid'));
	t.is(error.message, 'Invalid argument expected pid as number');
});

test('should throw if function is passed', t => {
	const error = t.throws(() => bringToFront(() => null));
	t.is(error.message, 'Invalid argument expected pid as number');
});

// Test('should return hwnd of current window', () => {
// t.true(bringToFront(process.pid) > 0);
// })

test('should return <= 0 if pid has no window', t => {
	t.true(bringToFront(123) <= 0);
});
