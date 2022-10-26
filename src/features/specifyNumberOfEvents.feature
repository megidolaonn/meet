Feature: Specify the number of events shown for a city.

Scenario: Site loads a default number of events per city.
Given the user hasn’t specified a number 
When the user views the page 
Then 32 will be the default number of events displayed for that city.

Scenario: User can select number of events displayed.
Given the user has changed the number of events they want to see 
When the user views the city page 
Then the number of events displayed will match the user’s set preferences. 
