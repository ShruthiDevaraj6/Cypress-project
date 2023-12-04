describe('Assertions', () => 
{
    it('Implicit Assertions', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.url().should('include','orangehrmlive.com')
      .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('not.contain','greenhrm')

      cy.title().should('include','Orange')
      .and('eq','OrangeHRM')
      .and('contain','HRM')

      cy.get('.orangehrm-login-branding > img').should('be.visible')
      .and('exist')

      //capturing all links on the page
      cy.xpath("//a").should('have.length','5')

      cy.get("input[placeholder='Username']").type("Admin")
      .should('have.value','Admin')
    })

    it('Explicit Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        //validate username after login
        let expUserName = "qq11 CollingsAjabe"

        cy.get(".oxd-userdropdown-name").then ( (x)=>{

            let actUserName = x.text()
            //BDD Style
            expect(actUserName).to.equal(expUserName)
            expect(actUserName).to.not.equal(expUserName)

            //TDD Style
            assert.equal(actUserName,expUserName)
            assert.notEqual(actUserName,expUserName)

        
        
        })
      })

    
  })