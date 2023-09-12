class Cards{


    constructor(){
        this.CardButton_Leftnav="//section/ul/li/a/span[text()='Cards']"
        this.ApplyForCard_Button="//button[@name='buttonApplyCard']"
        this.PhysicalCard="//label[text()='Physical Card']"
        this.CardType="//span[@title='PREPAID']"
        this.PrimaryUse_InputBox="//input[@name='tag_formWidget']"
        this.CardHolderName_InputBox="//input[@class='form-control app-textbox ng-pristine ng-invalid ng-touched']"
        this.CardHolderName_MobileNumber_InputBox="//input[@name='cardholderMobileNumber_formWidget']"
        this.NextButton="//button[@name='nextBtn_wizardVerticalCard1']"
        this.FirstNameInputBox="//input[@name='first_name_formWidget']"
        this.LastNameInputBox="//input[@name='last_name_formWidget']"
        this.GenderdropDown="//select[@name='gender_formWidget']"
        this.Email_InputBox="//input[@name='email_formWidget']"
        this.MobileNumber_InputBox="//input[@name='mobile_no_formWidget']"
        this.CardHolderDetails_NextButton="//button[@name='nextBtn_wizardVerticalCard1']"
        this.BillingAddress_Search_InputBox="//input[@name='form_field7_formWidget']"
        this.StreetAddress_InputBox="//input[@name='street_formWidget']"
        this.BillingAddress_Apartment_InputBox="//input[@name='buildingOrAddressLine2_formWidget']"
        this.BillingAddress_ApplyButton="//button[@name='doneBtn_wizardVerticalCard1']"

    }


    Cards(){
        return  cy.xpath(this.CardButton_Leftnav)
    }

   applyForCard(){
        return cy.xpath(this.ApplyForCard_Button)
    }

    
    selectCard(chooseCard){
        return cy.xpath("//div[@name='gridcolumn35']//label[text()='" + chooseCard + "']");
    }

    PrimaryUse(){
        return cy.xpath(this.PrimaryUse_InputBox)
    }

    selectCardType(cardType){

        return cy.xpath("//span[text()='" + cardType + "']");
    }
  
    selectCurrency(currency){

        return cy.xpath("//span[text()='" + currency + "']");
    }


    CardHoldername(){
        return cy.xpath(this.CardHolderName_InputBox)
    
        }

    MobileNumber(){
        return cy.xpath(this.MobileNumber_InputBox)
    }

    Next(){
        return cy.xpath(this.NextButton)
    }

    firstname(){
        return cy.xpath(this.FirstNameInputBox)
    }

    lastName(){
        return cy.xpath(this.LastNameInputBox)
    }
    email(){
        return cy.xpath(this.Email_InputBox)
    }
  cardHolderDetailsMobileNumber(){
    return cy.xpath(this.MobileNumber_InputBox)
  }
    AddressSearch(){
        return cy.xpath(this.BillingAddress_Search_InputBox)
    }

    StreetAddress(){
        return cy.xpath(this.StreetAddress_InputBox)
    }

    apartMent(){
        return cy.xpath(this.StreetAddress_InputBox)
    }


   ApplyButton(){
        return cy.xpath(this.BillingAddress_ApplyButton)
    }
        
  
}

export default Cards;