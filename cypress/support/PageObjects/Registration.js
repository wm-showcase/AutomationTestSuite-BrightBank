class Cards{


    constructor(){
        this.Register_Button="//span[text()='REGISTER']"
        this.Firstname_InputBox="//input[@name='first_name_formWidget']"
        this.LastName_InputBox="//input[@name='last_name_formWidget']"
        this.Nationality="///span[text()='American']"
        this.Email_InputBox="//input[@name='email_formWidget']"
        this.CardHolderName_InputBox="//input[@name='nameOnCard_formWidget']"
        this.MobileNumber_InputBox="//input[@name='telephone_formWidget']"
        this.NextButton="//button[@name='nextBtn_wizardVerticalCard1']"
        
    }


    static getFirstName(){
        return  cy.xpath(this.Firstname_InputBox)
    }
    static getLastName(){
        return  cy.xpath(this.LastName_InputBox)
    }

    chooseNationality(){
        return cy.xpath(this.PrimaryUse_InputBox).click().type("Savings123")
    }

    getEmail(){
        return cy.xpath(this.Email_InputBox).click()
    }

    getMobileOrTelephoneNumber(){
        cy.xpath(this.MobileNumber_InputBox).click()
    
       


    }

    getMobileNumber(){
        cy.xpath(this.MobileNumber_InputBox).click()
    }

    

        
  
}
export default Cards;