Feature: Search functionality


@Sanity@Regression
  Scenario Outline: Search the buy car with model

    Given I am on homePage
    When  I mouse hover on buy+sell tab
    And   I click Search Cars
    Then  I navigate to new and used car search page
    And   I select make "<make>"
    And   I select model "<model>"
    And   I select location "<location>"
    And   I select price "<price>"
    And   I click on find my next car tab
    Then  I should see the make "<make>" in result
    Examples:

      |  make       |   model    |   location           |    price       |
      |  Ford       | Focus      |NSW - New England     | $70,000        |
      |  Honda      | CR-V       |NSW - South Coast     | $50,000        |
      |  Audi       | A5         |NSW - All             | $200,000       |
      |Mercedes-Benz| A-Class    |NSW - Sydney          | $150,000       |
      |Mitsubishi   | Pajero     |NSW - Newcastle       | $80,000        |
      |Land Rover   | Discovery  |NSW - Newcastle       | $100,000       |



