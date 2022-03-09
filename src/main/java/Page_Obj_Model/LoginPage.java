package Page_Obj_Model;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {


	public LoginPage(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}
	public  WebDriver driver;


	@FindBy(id = "username")
	private WebElement uname;

	@FindBy(name = "password")
	private WebElement pwd;
	
	@FindBy(id = "login")
	private WebElement login;
	
	
	public WebElement getUname() {
		return uname;
	}

	public WebElement getPwd() {
		return pwd;
	}

	public WebElement getLogin() {
		return login;
	}

	
	
	

}
