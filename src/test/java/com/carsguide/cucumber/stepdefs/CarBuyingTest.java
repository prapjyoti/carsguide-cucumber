package com.carsguide.cucumber.stepdefs;

import com.carsguide.pages.HomePage;
import com.carsguide.pages.NewAndUsedCarPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class CarBuyingTest {
    @Given("^I am on homePage$")
    public void iAmOnHomePage() {

    }

    @When("^I mouse hover on buy\\+sell tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuySellLink();
    }

    @And("^I click Search Cars$")
    public void iClickSearchCars() {
        new HomePage().clickOnSearchCarsLink();
    }

    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage() throws InterruptedException {
        Thread.sleep(500);
        String expectedMessage1 = "New & Used Car Search - carsguide";
        String actualMessage1 = new NewAndUsedCarPage().verifyNewAndUsedCarsPageNavigation();
        Assert.assertEquals(actualMessage1,expectedMessage1);

    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) throws InterruptedException {
        Thread.sleep(500);
        new NewAndUsedCarPage().selectAnyCarMakeFromDropDown(make);

    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) throws InterruptedException {
        Thread.sleep(500);
        new NewAndUsedCarPage().selectCarModelFromDropDown(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) throws InterruptedException {
        Thread.sleep(500);
        new NewAndUsedCarPage().selectLocationFromDropDown(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) throws InterruptedException {
        Thread.sleep(500);
        new NewAndUsedCarPage().selectCarPriceFromDropDown(price);

    }

    @And("^I click on find my next car tab$")
    public void iClickOnFindMyNextCarTab() throws InterruptedException {
        Thread.sleep(500);
        new NewAndUsedCarPage().clickOnFindMyNextCarButton();
    }


    @Then("^I should see the make \"([^\"]*)\" in result$")
    public void iShouldSeeTheMakeInResult(String make) {
        Assert.assertTrue(make,new NewAndUsedCarPage().getSearchTextFromProduct().contains(make));
    }
}
