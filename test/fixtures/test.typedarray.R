options( digits = 16 )
library( jsonlite )

lambda = 40
k = 20
x = seq( -1000, 1000, 0.5 )
y = pweibull( x, k, lambda )

cat( y, sep = ",\n" )

data = list(
	lambda = lambda,
	k = k,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/typedarray.json" )
