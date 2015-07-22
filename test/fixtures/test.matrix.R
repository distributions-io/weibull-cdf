options( digits = 16 )
library( jsonlite )

lambda = 1.5
k = 1.5
x = 0:24
y = pweibull( x, k, lambda )

cat( y, sep = ",\n" )

data = list(
	lambda = lambda,
	k = k,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
