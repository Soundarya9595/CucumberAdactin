$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/FeatureFile/Adactinn.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Room Bookin in The Adactin Website",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Adactin Login Functionality",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website;adactin-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Must Enter THe User name \"\u003cUsername\u003e\" in the username text box",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Must Also enter The Password \"\u003cPassword\u003e\" for his Account",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click On The Login Button to Book the Hotel",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website;adactin-login-functionality;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 9,
      "id": "hotel-room-bookin-in-the-adactin-website;adactin-login-functionality;;1"
    },
    {
      "cells": [
        "abc",
        "123"
      ],
      "line": 10,
      "id": "hotel-room-bookin-in-the-adactin-website;adactin-login-functionality;;2"
    },
    {
      "cells": [
        "GirlyGirl",
        "Sweetie"
      ],
      "line": 11,
      "id": "hotel-room-bookin-in-the-adactin-website;adactin-login-functionality;;3"
    },
    {
      "cells": [
        "Mona90422",
        "Mona@9595"
      ],
      "line": 12,
      "id": "hotel-room-bookin-in-the-adactin-website;adactin-login-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Adactin Login Functionality",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website;adactin-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Must Enter THe User name \"abc\" in the username text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Must Also enter The Password \"123\" for his Account",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click On The Login Button to Book the Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.launch_The_Url()"
});
formatter.result({
  "duration": 13254212800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 31
    }
  ],
  "location": "Step_Definition.user_Must_Enter_THe_User_name_in_the_username_text_box(String)"
});
formatter.result({
  "duration": 1479350600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 35
    }
  ],
  "location": "Step_Definition.user_Must_Also_enter_The_Password_for_his_Account(String)"
});
formatter.result({
  "duration": 531784700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.click_On_The_Login_Button_to_Book_the_Hotel()"
});
formatter.result({
  "duration": 2176413400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Adactin Login Functionality",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website;adactin-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Must Enter THe User name \"GirlyGirl\" in the username text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Must Also enter The Password \"Sweetie\" for his Account",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click On The Login Button to Book the Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.launch_The_Url()"
});
formatter.result({
  "duration": 2126932700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GirlyGirl",
      "offset": 31
    }
  ],
  "location": "Step_Definition.user_Must_Enter_THe_User_name_in_the_username_text_box(String)"
});
formatter.result({
  "duration": 646682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sweetie",
      "offset": 35
    }
  ],
  "location": "Step_Definition.user_Must_Also_enter_The_Password_for_his_Account(String)"
});
formatter.result({
  "duration": 450957900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.click_On_The_Login_Button_to_Book_the_Hotel()"
});
formatter.result({
  "duration": 1024040500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Adactin Login Functionality",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website;adactin-login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Must Enter THe User name \"Mona90422\" in the username text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Must Also enter The Password \"Mona@9595\" for his Account",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click On The Login Button to Book the Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.launch_The_Url()"
});
formatter.result({
  "duration": 1916454000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mona90422",
      "offset": 31
    }
  ],
  "location": "Step_Definition.user_Must_Enter_THe_User_name_in_the_username_text_box(String)"
});
formatter.result({
  "duration": 535715600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mona@9595",
      "offset": 35
    }
  ],
  "location": "Step_Definition.user_Must_Also_enter_The_Password_for_his_Account(String)"
});
formatter.result({
  "duration": 439407900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.click_On_The_Login_Button_to_Book_the_Hotel()"
});
formatter.result({
  "duration": 4143439400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search Hotel Functionality",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website;search-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user Selects The Hotel Location",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user Selects the Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Selects The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Selects The Number of Rooms To Be Booked",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Enters The CheckIn Date",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Enters The CheckOut Date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Selects the Number of Adults per Room",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Selects the Number Of Kids Staying per Room",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Clicks The Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Hotel_Location()"
});
formatter.result({
  "duration": 1417608200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_the_Hotel()"
});
formatter.result({
  "duration": 505168800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Room_Type()"
});
formatter.result({
  "duration": 558740100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Number_of_Rooms_To_Be_Booked()"
});
formatter.result({
  "duration": 646622600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_CheckIn_Date()"
});
formatter.result({
  "duration": 440160100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_CheckOut_Date()"
});
formatter.result({
  "duration": 514254500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_the_Number_of_Adults_per_Room()"
});
formatter.result({
  "duration": 908972200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_the_Number_Of_Kids_Staying_per_Room()"
});
formatter.result({
  "duration": 641176600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_The_Search_Button()"
});
formatter.result({
  "duration": 2585185800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Select Hotel Functionality",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website;select-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "user Views the Selected Hotel Along With The Price Estimate and Clicks The Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user Click on The Continue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Views_the_Selected_Hotel_Along_With_The_Price_Estimate_and_Clicks_The_Radio_Button()"
});
formatter.result({
  "duration": 396439800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_on_The_Continue_Button()"
});
formatter.result({
  "duration": 2769205100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Book The Hotel Functionality",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website;book-the-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user Enters  The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user Enters  The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enters  The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enters  The Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Selects The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Selects The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Selects The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Selects The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Clicks On The Book Now Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_First_Name()"
});
formatter.result({
  "duration": 1602907900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_Last_Name()"
});
formatter.result({
  "duration": 494775500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_Billing_Address()"
});
formatter.result({
  "duration": 699167000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_Credit_Card_Number()"
});
formatter.result({
  "duration": 609467600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 523323300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Expiry_Month()"
});
formatter.result({
  "duration": 779113900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Expiry_Year()"
});
formatter.result({
  "duration": 745383400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_CVV_Number()"
});
formatter.result({
  "duration": 269474000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.clicks_On_The_Book_Now_Button()"
});
formatter.result({
  "duration": 468539000,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Taking Screen shot of The Booking Confirmation Page Functionality",
  "description": "",
  "id": "hotel-room-bookin-in-the-adactin-website;taking-screen-shot-of-the-booking-confirmation-page-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "user ScreenShots the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_ScreenShots_the_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 968304000,
  "status": "passed"
});
});