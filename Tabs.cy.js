describe('Handling Tabs', () => 
{
    it('Approach 1', () => {
      cy.visit("https://www.letskodeit.com/practice")
      
      cy.get("#opentab").invoke('removeAttr','target').click()
      
      cy.url().should('include','https://www.letskodeit.com/courses')
      cy.wait(5000)
      cy.go('back') //back to parent tab
      
    })

    it.only('Approach 2', () => {
        cy.visit("https://www.letskodeit.com/practice")
        
        cy.get("#opentab").then((e)=>{
            let url=e.prop('href')
            cy.visit(url)
        })
       
        cy.url().should('include','https://www.letskodeit.com/courses')
        cy.wait(5000)
        cy.go('back') //back to parent tab
        
      })
})