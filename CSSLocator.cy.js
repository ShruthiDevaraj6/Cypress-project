describe('CSSLocator', () => 
{
    it('cssLocators', () => {
      cy.visit("https://www.amazon.com/")
      cy.get("#twotabsearchtextbox").type("Winter clothes")
      cy.get("#nav-search-submit-button").click()
      cy.get(".a-color-state.a-text-bold").contains("Winter clothes") //Assertion
    })

    
  })