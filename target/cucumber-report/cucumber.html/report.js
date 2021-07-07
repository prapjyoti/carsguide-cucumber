$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in result",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Ford",
        "Focus",
        "NSW - New England",
        "$70,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - South Coast",
        "$50,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Audi",
        "A5",
        "NSW - All",
        "$200,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Mercedes-Benz",
        "A-Class",
        "NSW - Sydney",
        "$150,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Mitsubishi",
        "Pajero",
        "NSW - Newcastle",
        "$80,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Land Rover",
        "Discovery",
        "NSW - Newcastle",
        "$100,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17044508900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Focus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Ford\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyingTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 588343900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 438849700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickSearchCars()"
});
formatter.result({
  "duration": 3737314200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 610477200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "CarBuyingTest.iSelectMake(String)"
});
formatter.result({
  "duration": 950414800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Focus",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectModel(String)"
});
formatter.result({
  "duration": 906391800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "CarBuyingTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 892965300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 898163200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 15183285500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "CarBuyingTest.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 50802300,
  "status": "passed"
});
formatter.after({
  "duration": 1693940700,
  "status": "passed"
});
formatter.before({
  "duration": 13510970900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - South Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Honda\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyingTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 50700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 313661600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickSearchCars()"
});
formatter.result({
  "duration": 4876344600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 570757500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "CarBuyingTest.iSelectMake(String)"
});
formatter.result({
  "duration": 897226900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectModel(String)"
});
formatter.result({
  "duration": 944614700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - South Coast",
      "offset": 19
    }
  ],
  "location": "CarBuyingTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 877409600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 914396700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 16124330400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "CarBuyingTest.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 53911500,
  "status": "passed"
});
formatter.after({
  "duration": 1283497700,
  "status": "passed"
});
formatter.before({
  "duration": 14962943700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$200,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Audi\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyingTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 44800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 469079400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickSearchCars()"
});
formatter.result({
  "duration": 3781767000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 573433300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "CarBuyingTest.iSelectMake(String)"
});
formatter.result({
  "duration": 895634900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A5",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectModel(String)"
});
formatter.result({
  "duration": 961702100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuyingTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 825967500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$200,000",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 911816000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 16929933900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "CarBuyingTest.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 85762400,
  "status": "passed"
});
formatter.after({
  "duration": 1744834500,
  "status": "passed"
});
formatter.before({
  "duration": 13824476300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mercedes-Benz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A-Class\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$150,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mercedes-Benz\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyingTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 49000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 594372800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickSearchCars()"
});
formatter.result({
  "duration": 4328472400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 589146300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 15
    }
  ],
  "location": "CarBuyingTest.iSelectMake(String)"
});
formatter.result({
  "duration": 923656800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A-Class",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectModel(String)"
});
formatter.result({
  "duration": 873947400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "CarBuyingTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 838857800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150,000",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 920062700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 15193700400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 23
    }
  ],
  "location": "CarBuyingTest.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 60544400,
  "status": "passed"
});
formatter.after({
  "duration": 1737499500,
  "status": "passed"
});
formatter.before({
  "duration": 13597586700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mitsubishi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Pajero\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mitsubishi\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyingTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 43900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 445108100,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickSearchCars()"
});
formatter.result({
  "duration": 5539524100,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 602458400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 15
    }
  ],
  "location": "CarBuyingTest.iSelectMake(String)"
});
formatter.result({
  "duration": 931718000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pajero",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectModel(String)"
});
formatter.result({
  "duration": 926558700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "CarBuyingTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 983053000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 867638400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 15783590900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 23
    }
  ],
  "location": "CarBuyingTest.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 67420800,
  "status": "passed"
});
formatter.after({
  "duration": 1790623800,
  "status": "passed"
});
formatter.before({
  "duration": 11651908700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Discovery\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$100,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on find my next car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Land Rover\" in result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuyingTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 31600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 2189098100,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickSearchCars()"
});
formatter.result({
  "duration": 4209598800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 579943100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "CarBuyingTest.iSelectMake(String)"
});
formatter.result({
  "duration": 923609200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Discovery",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectModel(String)"
});
formatter.result({
  "duration": 849747400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "CarBuyingTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 847052300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100,000",
      "offset": 16
    }
  ],
  "location": "CarBuyingTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 901520900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuyingTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 14107314300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "CarBuyingTest.iShouldSeeTheMakeInResult(String)"
});
formatter.result({
  "duration": 40797800,
  "status": "passed"
});
formatter.after({
  "duration": 1673404600,
  "status": "passed"
});
});