'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( lambda, k )
*	Partially applies shape parameter `lambda` and scale parameter `k` and returns a function for evaluating the cumulative distribution function (CDF) for a Weibull distribution.
*
* @param {Number} lambda - shape parameter
* @param {Number} k - scale parameter
* @returns {Function} CDF
*/
function partial( lambda, k ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Weibull distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
