describe('Navigation', () => 
{
    it('Navigation test', () => {
      cy.visit("https://demo.opencart.com/")
      
      cy.title().should('eq','Your Store')//home page
      //clicking on Tablets
      cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").click()
      cy.get("div[id='content'] h2").should('have.text','Tablets')
      //going back to home page
      cy.go('back') //can specify as cy.go(-1)
      cy.title().should('eq','Your Store')
      cy.go('forward')//can specify as cy.go(+1)
      cy.get("div[id='content'] h2").should('have.text','Tablets')
    })

})