'use strict';

// FUNCTIONS //

var expm1 = Math.expm1 || function(x) {
	return Math.exp(x) - 1;
};
var pow = Math.pow;


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
		if ( x < 0 ) {
			return 0;
		}
		return -expm1( - pow( x / lambda, k ) );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
