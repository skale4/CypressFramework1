/// <reference types="cypress" />

import loginPage from '../pageObjects/loginPage'
import {login, signUp } from '../../fixtures/locators.json'


describe('Ajar Login', ()=>{
   const login = new loginPage()   

  let testData
   before(function() {
      cy.fixture('testData').then(function(data){
         testData = data
      })
   }) 

   it('Login Test', ()=>{    
      login.visit()
      login.fillUsername(testData.username)
      login.fillPassword(testData.password)
      login.clickLogin()
     cy.screenshot()
   })
 
})