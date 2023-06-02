import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
const HomePage = require ('../../pages/HomePage.cy');

Given ("I am on {string}", (url) => {
  cy.viewport(1920,1080)
  cy.visit(url)
  HomePage.clickAcceptCookies()
});

When ("From menu {string} I select {string}", (menu, submenu) => {
  HomePage.selectCategoryFromMenu(menu, submenu)
  cy.url().should('include', 'qa')
});

When ("I search by IT technology {string}", () => {

});

When ("I set {string} seniority", () => {

});

When ("I sort by {string}", () => {

});

Then ("I verify search criteria {string} {string} {string}", () => {

});

When ("I click on first search result", () => {

});

Then ("I verify result content", () => {

});