class Login{


    constructor(){
        this.Dashborad_label="//label[text()='Dashboard']"
        this.UpcomingTransactions="//label[@name='label3']"
        this.PhysicalCard="//label[text()='Physical Card']"
        this.CardType="//span[@title='PREPAID']"
        this.PrimaryUse_InputBox="//input[@name='tag_formWidget']"
        this.CardHolderName_InputBox="//input[@name='nameOnCard_formWidget']"
        this.MobileNumber_InputBox="//input[@name='cardholderMobileNumber_formWidget']"
        this.NextButton="//button[@name='nextBtn_wizardVerticalCard1']"
        
    }


    static getBashboardLabel(){
        return  cy.xpath(this.Dashborad_label)
    }

 
    static getText(locator){
    
        return cy.xpath(locator).first().invoke('text');
             
      }

    

        
  
}
export default Login;