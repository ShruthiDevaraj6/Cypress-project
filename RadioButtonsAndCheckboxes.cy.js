describe('Check UI Elements', () => 
{
   it('Checking Radio Buttons', () => {
      cy.visit("https://artoftesting.com/samplesiteforselenium")
      //visibility of radio buttons
      cy.get("#male").should('be.visible')
      cy.get("#female").should('be.visible')

      //selecting radio buttons (male)
      cy.get("#male").check().should('be.checked')
      cy.get("#female").should('not.be.checked')

      //selecting radio buttons (female)
      cy.get("#female").check().should('be.checked')
      cy.get("#male").should('not.be.checked')
    })

    it('Checking Checkboxes', () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium")

        //checking visibility
        cy.get("input[value='Automation']").should('be.visible')
  
        //selecting single checkbox
        cy.get("input[value='Automation']").check().should('be.checked')
        
  
        //unselecting checkbox
        cy.get("input[value='Automation']").uncheck().should('not.be.checked')
        
        //selecting multiple checkboxes
        cy.get("input[type='checkbox']").check().should('be.checked')
        cy.get("input[type='checkbox']").uncheck().should('not.be.checked')
      })
  

    
  })