//before-execute only once no matter how many it blocks are there, beforeEach-execute before every it block, after, AfterEach
//tags - skip,only

describe('Hooks and Tags', () => 
{
    before(()=>{
        cy.log("*****Launch app******")
    })

    after(()=>{
        cy.log("*****close app******")
    })

    beforeEach(()=>{
        cy.log("*****Login******")
    })

    afterEach(()=>{
        cy.log("*****Logout******")
    })

    it('Search', () => {
      cy.log("*****Searching*****")
        

    })

    it('Advanced Search', () => {
        cy.log("*****advanced Searching*****")
         
  
      })

})