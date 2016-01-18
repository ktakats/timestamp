## FCC API Basejump: Timestamp microservice

Prepared for FreeCodeCamp's [Timestamp Microservice Basejump](http://www.freecodecamp.com/challenges/timestamp-microservice)

###User stories:

1. I can pass a string as a parameter, and it will check to see whether that string  contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.
            
###Website:

[https://arcane-basin-8045.herokuapp.com](https://arcane-basin-8045.herokuapp.com)
            
###Examples:

`https://arcane-basin-8045.herokuapp.com/December%2015,%202015`
`https://arcane-basin-8045.herokuapp.com/1450137600000`
            
#####Output:

`{"unix":1450137600000,"natural":"December 15, 2015"}`