package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy (xpath = "//a[contains(text(),'buy + sell')] ")
    WebElement buysellLink;

    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCars;



    public void mouseHoverOnBuySellLink(){

        mouseHoverToElement(buysellLink);
        log.info("Mouse hover on By+Sell tab " + buysellLink.toString());
    }

public void clickOnSearchCarsLink(){
        mouseHoverToElementAndClick(searchCars);
    log.info("Mouse hover on By+Sell tab " + searchCars.toString());
}

}
