package com.StepDefinition;
import org.openqa.selenium.WebDriver;

import com.Adactin.Runner.Test_Runner;
import com.AdactinCucumber.BaseClass;

import Page_Obj_Manager.PageObjectManager;
import PropertyFile.FileReaderManager;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends BaseClass {

	public WebDriver driver = Test_Runner.driver;
	
	PageObjectManager pom = new PageObjectManager(driver);
	

@Given("^launch The Url$")
public void launch_The_Url() throws Throwable {
	
	
	String url = FileReaderManager.getobjFRM().getobjCRM().getUrl();
	Url(url);
	
}
//***************************************LoginPage*****************************************************

@When("^user Must Enter THe User name \"([^\"]*)\" in the username text box$")
public void user_Must_Enter_THe_User_name_in_the_username_text_box(String Username) throws Throwable {
	
	input(pom.getLp().getUname(), Username);
}

@When("^user Must Also enter The Password \"([^\"]*)\" for his Account$")
public void user_Must_Also_enter_The_Password_for_his_Account(String Password) throws Throwable {
	
	input(pom.getLp().getPwd(), Password);
}

@Then("^click On The Login Button to Book the Hotel$")
public void click_On_The_Login_Button_to_Book_the_Hotel() throws Throwable {
	Button(pom.getLp().getLogin());
}

//***************************************Select Hotel Page***************************************************
@When("^user Selects The Hotel Location$")
public void user_Selects_The_Hotel_Location() throws Throwable {
	String loc = FileReaderManager.getobjFRM().getobjCRM().getLoc();
	SelectValue(pom.getBp().getLoc(), loc);
}

@When("^user Selects the Hotel$")
public void user_Selects_the_Hotel() throws Throwable {
	String hotel = FileReaderManager.getobjFRM().getobjCRM().getHotel();
	SelectValue(pom.getBp().getHotel(), hotel);
}

@When("^user Selects The Room Type$")
public void user_Selects_The_Room_Type() throws Throwable {
	
	
	String room = FileReaderManager.getobjFRM().getobjCRM().getRoom();
	SelectValue(pom.getBp().getRoom(), room);
	
}

@When("^User Selects The Number of Rooms To Be Booked$")
public void user_Selects_The_Number_of_Rooms_To_Be_Booked() throws Throwable {
	
	SelectIndex(pom.getBp().getNos(), 2);
}

@When("^user Enters The CheckIn Date$")
public void user_Enters_The_CheckIn_Date() throws Throwable {
	
	String datein = FileReaderManager.getobjFRM().getobjCRM().getDatein();
	input(pom.getBp().getCheckin(), datein);
}

@When("^user Enters The CheckOut Date$")
public void user_Enters_The_CheckOut_Date() throws Throwable {
	String dateout = FileReaderManager.getobjFRM().getobjCRM().getDateout();
	input(pom.getBp().getCheckout(), dateout);
}

@When("^user Selects the Number of Adults per Room$")
public void user_Selects_the_Number_of_Adults_per_Room() throws Throwable {
	SelectIndex(pom.getBp().getAdult(),3);
}

@When("^user Selects the Number Of Kids Staying per Room$")
public void user_Selects_the_Number_Of_Kids_Staying_per_Room() throws Throwable {
	SelectIndex(pom.getBp().getChild(), 2);
}

@Then("^user Clicks The Search Button$")
public void user_Clicks_The_Search_Button() throws Throwable {
	
	Button(pom.getBp().getSubmit1());
}
//************************************************Select Hotel Page****************************************************************
@When("^user Views the Selected Hotel Along With The Price Estimate and Clicks The Radio Button$")
public void user_Views_the_Selected_Hotel_Along_With_The_Price_Estimate_and_Clicks_The_Radio_Button() throws Throwable {
	
	Button(pom.getCp().getRadio());
}

@Then("^user Click on The Continue Button$")
public void user_Click_on_The_Continue_Button() throws Throwable {
	Button(pom.getCp().getContinuee());
}
  

//*********************************************Booking The Hotel***************************************************************
@When("^user Enters  The First Name$")
public void user_Enters_The_First_Name() throws Throwable {
	
	String fname = FileReaderManager.getobjFRM().getobjCRM().getFname();
	input(pom.getAp().getFname(),fname);
}

@When("^user Enters  The Last Name$")
public void user_Enters_The_Last_Name() throws Throwable {
	
	String lname = FileReaderManager.getobjFRM().getobjCRM().getLname();
	input(pom.getAp().getLname(), lname);
}

@When("^user Enters  The Billing Address$")
public void user_Enters_The_Billing_Address() throws Throwable {
	
	String address = FileReaderManager.getobjFRM().getobjCRM().getAddress();
	input(pom.getAp().getAddress(), address);
}

@When("^user Enters  The Credit Card Number$")
public void user_Enters_The_Credit_Card_Number() throws Throwable {
	
	String card = FileReaderManager.getobjFRM().getobjCRM().getCard();
	input(pom.getAp().getCard(), card);
	
}

@When("^user Selects The Credit Card Type$")
public void user_Selects_The_Credit_Card_Type() throws Throwable {
	
	SelectIndex(pom.getAp().getType(), 2);
}

@When("^user Selects The Expiry Month$")
public void user_Selects_The_Expiry_Month() throws Throwable {
	
	SelectIndex(pom.getAp().getMonth(), 6);
}

@When("^user Selects The Expiry Year$")
public void user_Selects_The_Expiry_Year() throws Throwable {
	
	SelectIndex(pom.getAp().getYear(),6);
}

@When("^user Selects The CVV Number$")
public void user_Selects_The_CVV_Number() throws Throwable {
	
	String ccv = FileReaderManager.getobjFRM().getobjCRM().getCcv();
	input(pom.getAp().getCcv(), ccv);
}

@Then("^Clicks On The Book Now Button$")
public void clicks_On_The_Book_Now_Button() throws Throwable {
	Button(pom.getAp().getBook());
}


//*******************************Confirmation Page********************************************************
@Then("^user ScreenShots the Booking Confirmation Page$")
public void user_ScreenShots_the_Booking_Confirmation_Page() throws Throwable {
	
	screenshot("C:\\Users\\admin\\eclipse-workspace\\AdactinCucumber\\ScreenShots\\confirm.png");
}



	
	
	
}
