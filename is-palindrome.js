'use strict';

function isPalindrome(string) {
	if (typeof string !== 'string') {
		throw new Error(`${isPalindrome.name}'s argumnent must be a String`);
	}

	const prepareString = (string) => string.replace(/[^a-z\d]/gi, '').toLowerCase();
	const reversed = prepareString(string)
		.split('')
		.reverse()
		.join('');

	return prepareString(string) === reversed;
}

module.exports = isPalindrome;
