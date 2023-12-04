describe('My First Test', () => 
{
    it('Verify positive test', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')
    })

    it('Verify Negative test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM123')
      })
  })