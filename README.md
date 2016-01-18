## FCC API Basejump: Timestamp microservice

###User stories:

1. I can pass a string as a parameter, and it will check to see whether that string  contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.
            
            
###Examples:

`https://fcc-ktakats.c9users.io/December%2015,%202015`
`https://fcc-ktakats.c9users.io/1450137600000`-->
            
####Output:

`{"unix":1450137600000,"natural":"December 15, 2015"}`