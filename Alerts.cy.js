describe('Handling Alerts', () => 
{
    it('Alert1', () => {
      cy.visit("https://artoftesting.com/samplesiteforselenium")
      //alert with just ok button
      cy.get("button[onclick='generateAlertBox()']").click()
      cy.on('window:alert', (t)=>{
        expect(t).to.contains('Hi! Art Of Testing, Here!')
      })
      
    })

    it('Alert2', () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        //alert with ok and cancel button
        cy.get("button[onclick='generateConfirmBox()']").click()
        cy.on('window:confirm', (t)=>{
          expect(t).to.contains('Press a button!')
          cy.get('#demo').should('have.text','You pressed OK!')
        })
    })

    it('Alert3' , () => {
        cy.visit("https://artoftesting.com/samplesiteforselenium")
        //alert with ok and cancel button
        cy.get("button[onclick='generateConfirmBox()']").click()
        cy.on('window:confirm', (t)=>{
          expect(t).to.contains('Press a button!')
          
        })

        cy.on('window:confirm', ()=>false) //cypress closes alert window using cancel button
        cy.get('#demo').should('have.text','You pressed Cancel!')
        
      })

      it('Alert4' , () => {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")
        //Prompt alert - enter text with Ok and cancel buttons
        
        cy.window().then((win)=>{
          cy.stub(win,'prompt').returns('Syra');
          
        })
        cy.get("#prompt").click()
        cy.get("div[id='confirmdiag'] h2").should('have.text','PROMPT - Hello Syra! How are you today?')
        
      })

      
})