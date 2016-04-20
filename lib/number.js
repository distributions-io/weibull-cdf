'use strict';

// FUNCTIONS //

var expm1 = Math.expm1;
var pow = Math.pow;


// CDF //

/**
* FUNCTION: cdf( x, lambda, k )
*	Evaluates the cumulative distribution function (CDF) for a Weibull distribution with shape parameter `lambda` and scale parameter `k` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} lambda - shape parameter
* @param {Number} k - scale parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, lambda, k ) {
	if ( x < 0 ) {
		return 0;
	}
	return -expm1( - pow( x / lambda, k ) );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
