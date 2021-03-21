/// <reference types="cypress" />
import { login, signUp } from '../../fixtures/locators.json'

class signUpPage
{
    
    visit()
    {
        cy.visit('https://onajar.com/en/login')
    }

    clickSignUp()
    {
        cy.get('a[href*="/en/signup"]').first().click({force: true})
    }

    clickLandloard()
    {
        cy.get(signUp.landLoardOption).click({force: true})
    }

    clickNext()
    {
        cy.contains('next').click()
    }

    fillSignUpDetails(fname,lname,email,passwordSignup,country,properties,company,phone)
    {
        cy.get(signUp.fname1)
        .first()
        .type(fname)

        cy.get(signUp.lname1)
        .type(lname)

        cy.get(signUp.email)
        .type(email)

        cy.get(signUp.password)
        .type(passwordSignup)

       // cy.get(signUp.country).first().contains(country).click({force: true})
       cy.wait(500)
       cy.get(signUp.dropdownContainer).first().click()
       cy.get(signUp.dropdownContainer).first().type(country)
    // .should('have.value', 'United Arab Emirates')
    
       cy.wait(500)
       cy.get(signUp.dropdownContainer).last().click()
       cy.get(signUp.dropdownContainer).last().type(properties)
    //   .should('have.value', '11 - 50')

       cy.get(signUp.company)
       .type(company)

       cy.get(signUp.phone)
       .type(phone)

       cy.get('#terms').check()

    }

    clickNextButton()
    {
      cy.contains('next').click()
      //cy.contains('Congratulations, your account was successfully created.').should('be.visible')  
    }

}
export default signUpPage