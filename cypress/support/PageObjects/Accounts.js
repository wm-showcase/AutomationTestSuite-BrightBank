class Accounts{


    constructor(){
        this.Accounts="//span[text()='Accounts']"
        this.AddAccount="//button[@name='buttonAddAccount']"
        this.GiveUrAccountName="//input[@name='ledgerName_formWidget']"
        this.Currency="//span[@title='EUR €']"
        this.Select_Currency="//span[text()='EUR €']"
        this.PrimaryUse="//span[text()='Deposit']"
        this.Deposit="//span[text()='Deposit']"
        this.CreateButton="//button[@name='save']"
        this.CancelButton="//button[@name='reset']"
        this.OkayButton="//button[@name='button3']"
        this.TransferFunds_Button="//span[text()='Transfer Funds']"
        this.From_Account="//select[@name='ledger_id_formWidget']"
        this.To_Account="//select[@name='beneficiary_id_formWidget']"
        this.Amount_Input_Field="//input[@name='amount_formWidget']"
        this.Remarks_Textbox="//textarea[@name='Notes_formWidget']"
        this.Transfer_Button1="//button[@name='nextBtn_wizardTransfer']"    
        this.selectFirstAccount="//div[@name='card_content1']//label[text()='XXXXXXXXXXX-2054']"
        this.Confirm_Button="//button[@name='doneBtn_wizardTransfer']"
        this.AddMoney_Button="//button[@name='buttonFundAccount']"
        this.Amount_InputBox="//input[@name='amount_formWidget']"
        this.Add_Button="//button[@class='btn app-button btn-secondary']"

    }


    account(){
        return  cy.xpath(this.Accounts)
    }

    addAccount(){
        return cy.xpath(this.AddAccount)
    }

    getUrAccountName(){
        return cy.xpath(this.GiveUrAccountName)
    }

    deposit(){
        return cy.xpath(this.Deposit)
    }


    selectCurrency(currency){
        return cy.xpath("//span[text()='" + currency + "']");
    }

    primaryUse(primaryUse){
        return cy.xpath("//span[text()='" + primaryUse + "']");
    }

    // selectFirstAccount(accountNumber){
      
    //     return cy.xpath("//div[@name='card_content1']//label[text()='" + accountNumber + "']")
    // }

  createButton(){
        return cy.xpath(this.CreateButton)
       
       
}
okayButton(){
   return  cy.xpath(this.OkayButton)
}

transferFundsButton(){
    return  cy.xpath(this.TransferFunds_Button)
 }
  
 fromAccount(){
    return cy.xpath(this.From_Account)
 }
 
 toAccount(){
    return cy.xpath(this.To_Account)
 }

 getAddMoneyButton(){
    return cy.xpath(this.AddMoney_Button)
 }
 
getAmount(){
    return cy.xpath(this.Amount_Input_Field)
}

getLabelText(nameOfAccount){
    return cy.xpath("//label[text()='" + nameOfAccount + "']");
}

getRemarks(){
    return cy.xpath(this.Remarks_Textbox)
}

transferButton(){
    return cy.xpath(this.Transfer_Button1)
}

firstAccount(){
    return cy.xpath(this.selectFirstAccount)
}

confirm(){
    return cy.xpath(this.Confirm_Button)
}
getAmount(){
    return cy.xpath(this.Amount_InputBox)
}
getAddButton(){
    return cy.xpath(this.Add_Button)
}
}
export default Accounts;