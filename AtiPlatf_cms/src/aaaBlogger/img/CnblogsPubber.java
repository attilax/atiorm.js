package aaaBlogger.img;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
 



import com.attilaax.encode.EncodeX;
import com.attilax.cmsPoster.BlogPubberMainform;
import com.attilax.cmsPoster.Ipub;
import com.attilax.io.filex;
import com.attilax.io.pathx;
import com.attilax.util.PropX;


/**
 * aaaBlogger.CnblogsPubber
 * @author Administrator
 *
 */
public class CnblogsPubber  implements Ipub{

	@Override
	public void pub2(String p1tit, String p2_txt, FirefoxDriver driver) {
		p2_txt = changeBlogLink(p2_txt);
		 driver.findElement(By.id("Editor_Edit_txbTitle")).clear();
		    driver.findElement(By.id("Editor_Edit_txbTitle")).sendKeys(p1tit);
		    driver.findElement(By.id("Editor_Edit_APOptions_APSiteHome_cbHomeCandidate")).click();
		try {
			driver.findElement(By.id("Editor_Edit_EditorBody")).sendKeys(p2_txt);
			// driver.findElement(By.id("editor")).
		} catch (ElementNotVisibleException e) {
			// (IJavaScriptExecutor)
		//	JavascriptExecutor jse = (JavascriptExecutor) driver;
			p2_txt = EncodeX.jsEncodeSingleQuoue(p2_txt);
			// p2_txt="test in html";
			String baseDir=pathx.classPathParent_jensyegeor()
					 + "/blogger";
			String f =baseDir + "/db/" + BlogPubberMainform.blogName.get()
					 
					+ "/editor__form.js";
			String js = filex.read(f);
			String script = js.replace("@txt", p2_txt);

			// window.document.getElementById('editor').value='..xxx'
	Object obj=		driver.executeScript(script,
					driver.findElement(By.id("Editor_Edit_EditorBody")));
	System.out.println(obj);
			// jse.ex
		}

	 
		
	}

	public String changeBlogLink(String p2_txt) {
		String blogName=BlogPubberMainform.blogName.get();
		PropX px=(PropX) BlogPubberMainform.propMap.get(blogName);
		String blog_index=px.getProperty("blog_index");
		p2_txt=p2_txt.replace("http://blog.csdn.net/attilax", blog_index);
		return p2_txt;
	}

	@Override
	public void login(FirefoxDriver driver,Object  px2) {
		PropX px=(PropX) px2;
		  driver.findElement(By.id("input1")).clear();
		    driver.findElement(By.id("input1")).sendKeys("attilax");
		    driver.findElement(By.id("input2")).clear();
		    driver.findElement(By.id("input2")).sendKeys("aaa000..");
		    driver.findElement(By.id("remember_me")).click();
		  //  driver.findElement(By.id("signin")).click();
		
	}

}
