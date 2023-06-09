Feature: Search for a job on Hello World and validate search results

    Background:
        Given I am on "https://www.helloworld.rs/"

        Scenario: Search for a job on Hello World and validate the results
            When From menu "poslovi" I select "QA"
            And I search by IT technology "Cypress"
            And I set "intermediate" seniority
            And I sort by "Najnovije"
            Then I verify search criteria "QA" "Cypress"
            When I click on first search result
            Then I verify result content