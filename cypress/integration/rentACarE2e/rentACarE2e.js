import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
const searchPage = require('../../pages/rentACarE2e.js')

Given('A user launch Tivixlab website on browser', () => {
    cy.visit('/')
});

// Scenario 1

When('A user select valid Pick-up date', ()=>{
    searchPage.typePickUpDate('2023-01-10');
});

And('A user select valid Drop-off date', ()=>{
    searchPage.typeDropOffDate('2023-01-20');
});

And('A user clicks on the Search button', ()=>{
    searchPage.clickSearchButton();
});

Then('A user able to see search result', ()=>{
    searchPage.viewTableSearchResult();
});

// Scenario 2

And('User is on the search result page', () => {
    console.log('User see the search results');
});

Then('User clicks on first search result', ()=>{
    searchPage.clickFirstRentonSerach();
});

Given('User is on the search result page', () => {
    console.log('User see the search results');
});

And('The user able to see the selected car details', ()=>{
    searchPage.viewCarDetails();
});

Then('User able to click rent button to rent the selected car', ()=>{
    searchPage.clickRentButtonforDetails();
});

//Scenario 3

Given('User is on detail submition form', () => {
    console.log('User rent details form');
});

When('User enter name', ()=>{
    searchPage.typeName();
});

And('User enter lastName', ()=>{
    searchPage.typeLastname();
});

And('User enter card number', ()=>{
    searchPage.typeCardNumber();
});

And('User enter emailId', ()=>{
    searchPage.typeEmailId();
});

Then('A user clicks on the Rent button', ()=>{
    searchPage.clickRentBtntoSubmitUserDetails();
});







