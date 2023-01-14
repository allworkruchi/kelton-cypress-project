
class RentCarE2E{
    
    elements = {
        //Scenario 1 elements
        pickUpDate: () => cy.get('#pickup'),
        dropOffDate: () => cy.get('#dropoff'),
        searchButton: () => cy.get('form').contains('Search'),
        showTableSearchResult: () => cy.get('#search-results'),

        //Scenario 2 elements
        firstRentButton: () => cy.xpath('(//a[@class="btn btn-success"])').first(),
        seeCarDetails: () => cy.url(),
        clickRentButton: () => cy.get('.btn.btn-primary'),

        //Scenario 3 elements
        enterName: () => cy.get('#name'),
        enterLasrname: () => cy.get('#last_name'),
        enterCardNumber: () => cy.get('#card_number'),
        enterEmaiId: () => cy.get('#email'),
        submitRent: () => cy.get('button[type="submit"]')
     }

    //Scenario 1

    typePickUpDate(date){
        this.elements.pickUpDate().type(date);
    }

    typeDropOffDate(date){
        this.elements.dropOffDate().type(date);
    }

    clickSearchButton(){
        this.elements.searchButton().click();
    }

    viewTableSearchResult(){
        this.elements.showTableSearchResult();
    }

    //Scenario 2

    clickFirstRentonSerach(){
        this.elements.firstRentButton().click();
    }

    viewCarDetails(){
        this.elements.seeCarDetails();
    }

    clickRentButtonforDetails(){
        this.elements.clickRentButton().click();
    }

    // Scenario 3

    typeName(){
        this.elements.enterName().type('Ruchi');
    }

    typeLastname(){
        this.elements.enterLasrname().type('Bhardwaj');
    }

    typeCardNumber(){
        this.elements.enterCardNumber().type('123456789');
    }

    typeEmailId(){
        this.elements.enterEmaiId().type('ruchi@abc.com');
    }

    clickRentBtntoSubmitUserDetails(){
        this.elements.submitRent().click();
    }
}

module.exports = new RentCarE2E();