'use strict';

const test = require('tape');
const scribble = require('../src/index');
const utils = require('../src/utils');

test('Scribbletune::chord', (t) => {
	// Major
	t.equal(
		scribble.chord('c', 'major', 3),
		'c3,e3,g3',
		'C major is c e g'
	);

	// Minor
	t.equal(
		scribble.chord('a', 'minor', 3),
		'a3,c4,e4',
		'A minor is a c e'
	);

	// Major 7th
	t.equal(
		scribble.chord('f', 'major', 3, true),
		'f3,a3,c4,e4',
		'F major7 is f a c e'
	);

	// Diminished
	t.equal(
		scribble.chord('c', 'locrian #2', 3),
		'c3,d#3,f#3',
		'C Diminished is c d# f#'
	);

	t.end();
});
