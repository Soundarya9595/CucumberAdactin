Feature: Hotel Room Bookin in The Adactin Website
Scenario Outline: Adactin Login Functionality
Given launch The Url
When user Must Enter THe User name "<Username>" in the username text box
And user Must Also enter The Password "<Password>" for his Account
Then click On The Login Button to Book the Hotel

Examples: 
|Username|Password|
|abc|123|
|GirlyGirl|Sweetie|
|Mona90422|Mona@9595|


Scenario: Search Hotel Functionality
When user Selects The Hotel Location
And user Selects the Hotel
And user Selects The Room Type
And User Selects The Number of Rooms To Be Booked
And user Enters The CheckIn Date
And  user Enters The CheckOut Date
And user Selects the Number of Adults per Room
And user Selects the Number Of Kids Staying per Room
Then user Clicks The Search Button

Scenario: Select Hotel Functionality
When user Views the Selected Hotel Along With The Price Estimate and Clicks The Radio Button
Then user Click on The Continue Button

Scenario: Book The Hotel Functionality
When user Enters  The First Name
And user Enters  The Last Name
And user Enters  The Billing Address
And user Enters  The Credit Card Number
And user Selects The Credit Card Type
And user Selects The Expiry Month
And user Selects The Expiry Year
And user Selects The CVV Number
Then Clicks On The Book Now Button

Scenario: Taking Screen shot of The Booking Confirmation Page Functionality
Then user ScreenShots the Booking Confirmation Page