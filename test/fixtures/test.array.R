options( digits = 16 )
library( jsonlite )

lambda = 3
k = 3
x = seq( -300, 300, 0.5 )
y = pweibull( x, k, lambda )

cat( y, sep = ",\n" )

data = list(
	lambda = lambda,
	k = k,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
