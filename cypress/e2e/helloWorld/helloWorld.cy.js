import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
const HomePage = require ('../../pages/HomePage.cy');
const JobPage = require ('../../pages/JobPage.cy');
const ResultPage = require ('../../pages/ResultPage.cy');

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

Given ("I am on {string}", (url) => {
  cy.viewport(1920,1080)
  cy.visit(url)
  HomePage.clickAcceptCookies()
});

When ("From menu {string} I select {string}", (menu, submenu) => {
  HomePage.selectCategoryFromMenu(menu, submenu)
  cy.url().should('include', 'qa')
});

When ("I search by IT technology {string}", (technology) => {
  JobPage.clickOnKeywordAndType(technology)
});

When ("I set {string} seniority", (seniority) => {
  JobPage.clickOnSeniorityAndSelectOption(seniority)
});

When ("I sort by {string}", (sortBy) => {
  JobPage.sortJobs(sortBy)
});

Then ("I verify search criteria {string} {string}", (category, technology) => {
  JobPage.verifySearchResult(category, technology)
});

When ("I click on first search result", () => {
  JobPage.clickOnFirstJobTitle()
});

Then ("I verify result content", () => {
  ResultPage.verifyResultContent()
});