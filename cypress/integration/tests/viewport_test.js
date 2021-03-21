describe('test diff view ports', ()=>{

    before(()=>{
        console.log('running my test....')
    })
    
    beforeEach(()=>{
        cy.visit('https://www.google.com/')
    })

    it('open in iphone-7', ()=>{
        cy.viewport('iphone-7') 
        cy.screenshot()
        
        
    })

    /*it('open in iphone-3', ()=>{
        cy.viewport('iphone-3') 
        cy.screenshot(200)
        cy.wait()
    }) */
} )