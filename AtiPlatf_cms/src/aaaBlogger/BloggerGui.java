package aaaBlogger;

import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.openqa.selenium.firefox.FirefoxDriver;

 


import com.attilax.cmsPoster.BlogPubberMainform;
import com.attilax.formH5.SwtLauncher;
import com.attilax.io.pathx;

public class BloggerGui  {

 

	public static void main(String[] args) {
		
	//	org.openqa.selenium.firefox.internal.Executable
		pathx.isWebPathMode=true;
		String $s="abcdefg";
	System.out.println("");
	//	driver.get(baseUrl + "");
	BlogPubberMainform ef=new BlogPubberMainform();
	ef.setSize(1200, 800);
		ef.show();
		ef.threadRecycle();

	}

}
