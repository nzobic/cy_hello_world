import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
const HomePage = require ('../../pages/HomePage.cy');

Given ("I am on {string}", (url) => {
  cy.visit(url)
});

When ("I select {string} from menu", () => {

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