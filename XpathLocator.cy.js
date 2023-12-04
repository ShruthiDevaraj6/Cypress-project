describe('XpathLocator', () => 
{
    it('xpathLocator', () => {
      cy.visit("https://www.amazon.com/")
      cy.xpath("//div[@class='a-section a-spacing-none a-spacing-top-small feed-carousel first-carousel feed-carousel-touch']//ul[@role='list']/li").should('have.length','17')
    })

    
  })