require('@4tw/cypress-drag-drop')
describe('Handling Mouse Operations', () => 
{
    it('Mousehover', () => {
      cy.visit("https://demo.opencart.com/")

      cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
      .should('not.be.visible') //Checking desktop and mac dropdown

      cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

      cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
      .should('be.visible') //Checking desktop and mac dropdown

    })

    it.only('Right click', () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/mouseevents")
        cy.get("#rightclick").rightclick()
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('contextmenu event is fired')
          })
  
        
      })

      it('Double click', () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/mouseevents")
        cy.get("#dblclick").dblclick()
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('dblclick event is fired')
          })
  
        
      })

      it('Drag and drop using plugin', () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/dragndrop")
        cy.wait(3000)
        cy.get("#divOne").drag("body > div:nth-child(2) > fieldset:nth-child(4) > div:nth-child(3)",{force:true})
  
        
      })

      it('Scrollong the page', () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(1) > tbody > :nth-child(66) > :nth-child(2)').scrollIntoView({duration:2000})//scroll till Finland flag
        cy.get(':nth-child(1) > tbody > :nth-child(66) > :nth-child(2)').should('be.visible')
        cy.get(':nth-child(1) > tbody > :nth-child(39) > :nth-child(2)').scrollIntoView({duration:2000})//scroll back till china flag
        cy.get(':nth-child(1) > tbody > :nth-child(39) > :nth-child(2)').should('be.visible')
        
      })
})