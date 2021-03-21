/// <reference types="cypress" />

/// <reference types="cypress" />
import signUpPage from '../pageObjects/signUpPage'

describe('Ajar signup', ()=>{
   
   let testData
   before(function() {
      cy.fixture('testData').then(function(data){
         testData = data
      })
      
   })
   it('Login Test', ()=>{
      const sp = new signUpPage()
      sp.visit()
      cy.wait(4000)
      sp.clickSignUp()
      sp.clickLandloard()
      sp.clickNext()
      sp.fillSignUpDetails(testData.firstName, testData.lastName, testData.email, testData.passwordSignUp, testData.noOfcountries, testData.noOfProperties, testData.companyName, testData.phoneNumber)
      sp.clickNextButton()
      cy.screenshot()
   })
    
})