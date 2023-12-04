//require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
describe('File Upload', () => 
{
    it('Single File Upload', () => {
      cy.visit("https://fineuploader.com/demos.html")
      //whatever file you want to upload, put that file in fixtures folder
      cy.get("div[id='fine-uploader-gallery'] input[title='file input']").attachFile('MayfairCard (1).jpg')
      cy.wait(5000)
      

    })

    it('File Upload - Rename', () => {
        cy.visit("https://fineuploader.com/demos.html")
        //whatever file you want to upload, put that file in fixtures folder
        cy.get("div[id='fine-uploader-gallery'] input[title='file input']").attachFile({filePath:'MayfairCard (1).jpg', fileName:'RenameMyFile.jpg'})
        cy.wait(5000)
        
  
      })

      it('File - Drag and drop', () => {
        cy.visit("https://fineuploader.com/demos.html")
        //whatever file you want to upload, put that file in fixtures folder
        cy.get("div[id='fine-uploader-gallery'] div[class='qq-uploader-selector qq-uploader qq-gallery']").attachFile("Vaccine Certificate_Santhosh.jpeg", {subjectType: 'drag-n-drop'}, {force:true});
        cy.wait(5000)
        cy.get(".qq-file-id-0.qq-upload-success").contains("Vaccine Certificate_Santhosh.jpeg")
        
  
      })

      it('Multiple Files upload', () => {
        cy.visit("https://fineuploader.com/demos.html")
        //whatever file you want to upload, put that file in fixtures folder
        cy.get("div[id='fine-uploader-gallery'] input[title='file input']").attachFile(["Vaccine Certificate_Santhosh.jpeg","MayfairCard (1).jpg"] );
        cy.wait(5000)
        cy.get('#fine-uploader-gallery > .qq-uploader-selector > .qq-upload-list-selector').should('contain','Vaccine Certificate_Santhosh.jpeg').and('contain','MayfairCard (1).jpg')
        
        
  
      })

      it.only('File upload-Shadow DOM', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        //whatever file you want to upload, put that file in fixtures folder
        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile("Vaccine Certificate_Santhosh.jpeg")
        cy.wait(5000)
        cy.get(".smart-item-name", {includeShadowDom:true}).contains('Vaccine Certificate_Santhosh.jpeg')
        
  
      })
})