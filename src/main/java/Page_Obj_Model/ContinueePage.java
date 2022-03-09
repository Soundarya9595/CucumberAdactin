package Page_Obj_Model;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ContinueePage {

	public WebDriver driver;

	public ContinueePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath = "//input[@id='radiobutton_0']")
	WebElement radio;
	
	@FindBy(id = "continue")
	WebElement continuee;

	public WebElement getRadio() {
		return radio;
	}

	public WebElement getContinuee() {
		return continuee;
	}
	

	
}
