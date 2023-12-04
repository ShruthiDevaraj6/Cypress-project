

describe('Handling Dropdowns', () => 
{
    it.skip('Dropdown with select', () => {
      cy.visit("https://artoftesting.com/samplesiteforselenium")
      
      cy.get("#testingDropdown")
      .select("Manual Testing")
      .should('have.value','Manual')
    })

    it.skip('Dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Japan').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Japan')
      })

      it.skip('Auto suggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        
        cy.get("#searchInput").type('Delhi')
        cy.get(".suggestion-title").contains('Delhi University').click()
        
      })

      it('Dynamic dropdown', () => {
        cy.visit("http://www.google.fi/")
        cy.get('#L2AGLb > .QS5gu').click()
        
        cy.get("#APjFqb").type('cypress automation')
        cy.wait(3000)
        cy.get("div.wM6W7d>span").should('have.length','12')

        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            if($el.text()=='cypress automation interview questions'){
                cy.wrap($el).click()
            }

        })
        cy.get("#APjFqb").should('have.value','cypress automation interview questions')
        
      })
  

    
  })