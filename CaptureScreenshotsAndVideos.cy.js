describe('mySuite', () => 
{
    it('Capture Screenshots and Videos', () => {
      cy.visit("https://demo.opencart.com/")
      cy.screenshot("homepage")
      //capture screenshot of logo
      cy.wait(5000)
      cy.get("img[title='Your Store']").screenshot("logo")
    })

    it.only('Fail the test case- screenshot of failed test case', () => {
        cy.visit("https://demo.opencart.com/")
        //clicking on tablet page
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").click()
        //checking for tablets page but intentionally writing assertion for cameras page to fail the test case so that you can take the screenshot of the failed scenario
        cy.get("div[id='content'] h2").should('have.text','Cameras')
      })
  
  })
//give the command in the terminal - npx cypress run--spec cypress\e2e\CaptureScreenshots&Videos.cy.js
//and check for screenshots and videos in their respective folders
