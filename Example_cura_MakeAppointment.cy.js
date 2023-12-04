import LoginAppointment from "../PageObjects/LoginAppointmentPage.js"
describe('Cura Make Appointment', () =>   
{
    const ln = new LoginAppointment();
    let userdata;
    before(()=>{  
    
        cy.fixture('cura.json').then((data)=>{
        userdata=data
            })
    })
    it('Make appointment using POM and Fixtures', () => { 
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
        cy.fixture('cura.json').then((data)=>{
        ln.clickLoginDropdown()
        ln.verifyLoginLabel()
        ln.setUserName(userdata.username)
        ln.setPassword(userdata.password)
        ln.clickSubmit()
        ln.verifyLogin()
        ln.makeAppointment()   
        })
    })

        after(()=>{  
            ln.verifyLogout()
                })
        })
    
      
        
      

