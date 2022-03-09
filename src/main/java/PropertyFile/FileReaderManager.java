package PropertyFile;

import java.io.IOException;

public class FileReaderManager {

private   FileReaderManager() {
}
 
	
	
	public static FileReaderManager getobjFRM() {
		FileReaderManager frm = new FileReaderManager();
		return frm;
	}
	
	public ConfigReader getobjCRM() throws IOException {
		ConfigReader cr = new ConfigReader();
		return cr;
	}
	
}
