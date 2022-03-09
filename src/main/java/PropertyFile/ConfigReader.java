package PropertyFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigReader {

	public static Properties p;
	
		public ConfigReader() throws IOException {
		
			
		File f = new File(
				"C:\\Users\\admin\\eclipse-workspace\\AdactinCucumber\\src\\main\\java\\PropertyFile\\Configuration.properties");
	
	
		FileInputStream fis = new FileInputStream(f);
	
		 p = new Properties();
		
		p.load(fis); 
	}
	

	public String getUrl() throws IOException {

		
	String url = p.getProperty("url");
	return url;
	
	}
	
	public String getUname() throws IOException {
		
		String uname = p.getProperty("uname");
		return uname;
	}
	
	public String getFname() throws IOException {
		
		String fname = p.getProperty("fname");
		return fname;
		
	}
	
	public String getLname() throws IOException {
		String lname = p.getProperty("lname");
		return lname;
		
	}
	
	
	public String getPwd() throws IOException {
		
		String pwd = p.getProperty("pwd");
		return pwd;
		
	}
	
public String getLoc() throws IOException {
		
		String loc = p.getProperty("loc");
		return loc;
		
	}
	
public String getHotel() throws IOException {
		
	String hotel = p.getProperty("hotel");
	return hotel;
	
	}


public String getRoom() throws IOException {
	String room = p.getProperty("room");
	return room;
}
public String getDatein() throws IOException {
	
	String datein = p.getProperty("datein");
	return datein;
	
}
public String getDateout() throws IOException {
	String dateout = p.getProperty("dateout");
	return dateout;
}
public String getAddress() throws IOException {
	String address = p.getProperty("address");
	return address;
}

public String getCard() throws IOException {
	
	String card = p.getProperty("card");
	return card;
}
public String getCcv() throws IOException {
	
	String ccv = p.getProperty("ccv");
	return ccv;
}



}
