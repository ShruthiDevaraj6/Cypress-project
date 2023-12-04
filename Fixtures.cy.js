

describe('Fixtures', () => 
{
    //Direct access
    it.skip('Fixtures demo', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      //create a file in fixtures folder - orangehrm.json
      cy.fixture('orangehrm.json').then((data)=>{
      cy.get("input[placeholder='Username']").type(data.username)
      cy.get("input[placeholder='Password']").type(data.password)
      cy.get("button[type='submit']").click()
      cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', data.expected)
      
      })
      

    })
    //Access through hooks for multiple it blocks
    let userdata;
    before(()=>{
        cy.fixture('orangehrm.json').then((data)=>{
            userdata=data;
            })
    })

    it('Fixtures demo', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //create a file in fixtures folder - orangehrm.json
        cy.fixture('orangehrm.json').then((data)=>{
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userdata.expected)
        
        })
        
  
      })

})