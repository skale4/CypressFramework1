/// <reference types="cypress" />
import { login, signUp } from '../../fixtures/locators.json'

class loginPage
{
    
    visit()
    {
        cy.visit('https://onajar.com/en/login')
    }

    fillUsername(uname)
    {
        cy.get(login.emailOrMobile, { timeout: 10000 }).should('be.visible');
        cy.get(login.emailOrMobile).type(uname)
    }

    fillPassword(password)
    {
        cy.get(login.password1).type(password)
    }

    clickLogin()
    {
        cy.get(login.loginBtn).click()
    }

}
export default loginPage