Feature: Show and hide the details of an events

Scenario: Site loads a list of events which can be expanded to show more details.
Given the list of events has been loaded
When the user scrolls through the page 
Then each event element shown will be collapsed by default.

Scenario: More details shown when the user clicks a button on the event. 
Given the user hasn’t expanded an event 
When the user clicks the “show details” button 
Then the event element will be expanded.

Scenario: User can hide the extra information of an event.
Given the user has expanded an event
When the user clicks the “hide details” button
Then the event element will be collapsed.
