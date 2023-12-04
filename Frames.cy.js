import 'cypress-iframe'
describe('Handling iFrames', () => 
{
    it('Approach 1', () => {
      cy.visit("https://www.letskodeit.com/practice")
      //const iframe=cy.get("#courses-iframe")//you can add these 4 lines directly in commands.js so I am commenting this
     // .its('0.contentDocument.body')
      //.should('be.visible')
      //.then(cy.wrap)

      cy.getIframe("#courses-iframe")
      
    })

    it.only('Approach 2', () => {
        cy.visit("https://www.letskodeit.com/practice")
        
        cy.frameLoaded("#courses-iframe")
        
      })

})