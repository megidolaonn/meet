# meet

This is an application that will show upcoming events for various cities using the Google Calendar API. The application will have the features listed below:

FEATURE 1: FILTER EVENTS BY CITY  
As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.  
* Scenario 1: Given user hasn’t searched for any city, when the user opens the app, then the user should see a list of all upcoming events  
* Scenario 2: Given the main page is open, when user starts typing in the city textbox, then the user should see a list of cities (suggestions) that match what they’ve typed.  
* Scenario 3: Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing, when the user selects a city (e.g., “Berlin, Germany”) from the list,then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city.  

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS  
As a user, I should be able to show or hide an event’s details, so that I can learn more about the events I’m interested in.  
* Scenario 1: Given the list of events has been loaded, when the user scrolls through the page, then each event element shown will be collapsed by default.  
* Scenario 2: Given the user hasn’t expanded an event, when the user clicks the “show details” button, then the event element will be expanded.  
* Scenario 3: Given the user has expanded an event, when the user clicks the “hide details” button, then the event element will be collapsed.  

FEATURE 3: SPECIFY NUMBER OF EVENTS  
As a user, I should be able to specify the number of events that show up on my page, so that I can customize my page to fit my preferences.  
* Scenario 1: Given the user hasn’t specified a number, when the user selects a city, then 32 will be the default number of events displayed for that city.  
* Scenario 2: Given the user has changed the number of events they want to see, then when the user views the city page, then the number of events displayed will match the user’s set preferences.  

FEATURE 4: USE THE APP WHEN OFFLINE  
As a user, I should be able to use the app when offline, so that I can continue to view cached data.  
* Scenario 1: Given there is no current internet connection, when the user attempts to use the app, then they will still be able to view the cached data.  
* Scenario 2: Given there is no current internet connection, when the user attempts to change the settings, then they will get an error.  

FEATURE 5: DATA VISUALIZATION  
As a user, I should be able to access charts of upcoming events by city, so that I can have a more streamlined viewing experience.  
* Scenario 1: Given the list of events has been loaded, when the user selects a city, then they will be shown a chart with the number of upcoming events for that city.  
