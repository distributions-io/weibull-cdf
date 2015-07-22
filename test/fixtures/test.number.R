options( digits = 16 )
library( jsonlite )

lambda = 1
k = 1
x = c( -5, -2.5, 0, 2.5, 5 )
y = pweibull( x, lambda, k )

cat( y, sep = ",\n" )

data = list(
	lambda = lambda,
	k = k,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
