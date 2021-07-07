package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NewAndUsedCarPage extends Utility {


    private static final Logger log = LogManager.getLogger(NewAndUsedCarPage.class.getName());


    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement newUsedCarsText;


    @FindBy(xpath = "//select[@id='makes']")
    WebElement carMakes;

    @FindBy(xpath = "//select[@id='models']")
    WebElement carModels;

    @FindBy(xpath = "//select[@id='locations']")
    WebElement carLocations;

    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement carPrice;

    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyCarButton;

    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement searchTitleText;



    public String verifyNewAndUsedCarsPageNavigation(){
        log.info(" Verify New & Used Car Search text from element "+newUsedCarsText.toString());
        return getTextFromElement(newUsedCarsText);
    }
   public void selectAnyCarMakeFromDropDown(String make){
        mouseHoverToElement(carMakes);
        selectByVisibleTextFromDropDown(carMakes,make);
       log.info("Selecting Car Make form drop down menu list  "+carMakes.toString());
   }
   public void selectCarModelFromDropDown(String model){
        mouseHoverToElement(carModels);
        selectByVisibleTextFromDropDown(carModels,model);
       log.info("Selecting Car model form drop down menu list  "+carModels.toString());
   }
   public void selectLocationFromDropDown(String location) {
        mouseHoverToElement(carLocations);
       selectByVisibleTextFromDropDown(carLocations, location);
       log.info("Selecting location form drop down menu list  " + carLocations.toString());

   }

   public void selectCarPriceFromDropDown(String price){
        mouseHoverToElement(carPrice);
        selectByVisibleTextFromDropDown(carPrice,price);
       log.info("Selecting price form drop down menu list  " + carPrice.toString());

   }
   public void clickOnFindMyNextCarButton(){
        clickOnElement(findMyCarButton);
       log.info("Clicking on Find My Next Car button "+findMyCarButton.toString());

   }
   public String getSearchTextFromProduct(){
        return searchTitleText.getText();
   }
}
