package com.Adactin.Runner;
  
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.AdactinCucumber.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src\\test\\java\\com\\FeatureFile\\Adactinn.feature", 
					monochrome = true,
					dryRun = false,
					strict = true,
					plugin = {"html:Report", "pretty" , "json:Report/jsonfile.json", 
							"com.cucumber.listener.ExtentCucumberFormatter:Report/adactin.html"},
					
					glue = "com\\StepDefinition"  )

public class Test_Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void set_up()  {

		driver = BaseClass.browser("Chrome");

	}

	@AfterClass
	public static void tear_Up() {

		BaseClass.close();
	}

}
