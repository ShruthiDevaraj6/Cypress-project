describe('Handling Table', (() => 
{
    beforeEach('Login',()=>{
       cy.visit("https://demo.opencart.com/admin/index.php") 
       cy.get("#input-username").type("demo")
       cy.get("#input-password").type("demo")
       cy.get("button[type='submit']").click()
       cy.get(".btn-close").click()
       cy.get("#menu-customer>a").click()
       cy.get("#menu-customer>ul>li:first-child").click()
    })
    it('Check number of rows and columns', () => {
      
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
      cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
      
    })

    it('Check cell data from specific row and column', () => {
      
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(9)>td:nth-child(3)").contains("princytrainings4@gmail.com")
        
        
      })
      it('Read the data from all rows and columns in 1st page', () => {
      
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=> {
          cy.wrap($row).within(()=>{
            cy.get("td").each(($col, index, $cols)=> {
              cy.log($col.text())
            })
          })
        })
        
        
      })

        it.only('Pagination', () => {
          //find total number of pages
          /*let totalPages;
        cy.get(".col-sm-6.text-end").then((e)=>{
          let mytext = e.text() //Showing 1 to 10 of 16253 (1626 Pages)
          totalPages =mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1)
          cy.log("Total number of pages in a table=========>" +totalPages )
        })*/

        let totalPages= 6;
        for(let p=1;p<=totalPages;p++){
          if(totalPages>1){
            cy.log("Active page is=====>" + p)
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
            cy.wait(3000)

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{
              cy.wrap($row).within(()=> {
                cy.get("td:nth-child(3)").then((e)=>{
                  cy.log(e.text())//Capturing email so 3rd child
                })
              })
        })
          }
        }


        
        
      })

}))  
