describe('Custom commands', () => 
{
    it('Handling links', () => {
      cy.visit("https://demo.opencart.com/")
      //Using custom commands - the name is given in the commands.js 
      cy.clickLink("iPhone")
      cy.get("div[class='col-sm'] h1").should('have.text','iPhone')

    })

    it('Overwriting existing commands using contains', () => {
        cy.visit("https://demo.opencart.com/")
        //Using custom commands - the name is given in the commands.js 
        cy.clickLink("IPHONE")// taking custom command for contains method for case sensitivity
        cy.get("div[class='col-sm'] h1").should('have.text','iPhone')
  
      })

      it.only('Login', () => {
        cy.visit("https://demo.opencart.com/")
        //Using custom commands - the name is given in the commands.js 
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .fa-caret-down').click()
        cy.clickLink("Login")// taking custom command 
        cy.loginapp("d.shruthi1@gmail.com","test123")
        cy.get("ul[class='breadcrumb'] li:nth-child(2) a:nth-child(1)").should('have.text','Account')
      })
  

})