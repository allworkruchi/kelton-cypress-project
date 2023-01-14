Feature: Search Page
        Background:
            
        Scenario: Rent A Car 
            Given A user launch Tivixlab website on browser
            When  A user select valid Pick-up date
            And A user select valid Drop-off date
            And A user clicks on the Search button
            And A user able to see search result

            Given User is on the search result page
            Then User clicks on first search result
            And The user able to see the selected car details
            Then User able to click rent button to rent the selected car

            Given User is on detail submition form
            When User enter name 
            And User enter lastName
            And User enter card number
            And User enter emailId 
            Then A user clicks on the Rent button
