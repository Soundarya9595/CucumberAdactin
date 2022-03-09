package Page_Obj_Manager;

import org.openqa.selenium.WebDriver;

import Page_Obj_Model.AdditionalPage;
import Page_Obj_Model.BookingPage;
import Page_Obj_Model.ContinueePage;
import Page_Obj_Model.LoginPage;

public class PageObjectManager {
public  WebDriver  driver;
private ContinueePage cp;
private LoginPage lp;
private AdditionalPage ap;
private BookingPage bp;

	public PageObjectManager(WebDriver driver2) {
	this.driver = driver2;
}
	public ContinueePage getCp() {
		if(cp==null) {
			cp = new ContinueePage(driver);
			
		}
		return cp;
	}
	public LoginPage getLp() {
		if(lp==null) {
			lp= new LoginPage(driver);
		}
		return lp;
	}
	public AdditionalPage getAp() {
		if(ap==null) {
			ap= new AdditionalPage(driver)	;	}
			
		return ap;
	}
	public BookingPage getBp() {
		if(bp==null ) {
			bp=new BookingPage(driver);
			
		}
		return bp;
	}
	
	
	
	
	
	
	
	
}
