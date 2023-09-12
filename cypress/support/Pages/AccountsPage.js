import Accounts from "../PageObjects/Accounts";
let acct=new Accounts()

class AccountsPage{

static createNewAccount(accountName,currency, primaryUse ){
cy.wait(5000)
acct.account().click()
acct.addAccount().click()
acct.getUrAccountName(accountName).click().type(accountName)
acct.selectCurrency(currency).click()
acct.primaryUse(primaryUse).click()
acct.createButton().click()
acct.okayButton().click()
cy.wait(4000)
acct.getLabelText(accountName).invoke('text').then((c)=>{
    cy.log('c')
    expect(c).to.eq(accountName);  
})
}


static transferfund(fromAccount,toSelectBeneficaryAccount,amount,remarks){
cy.wait(4000)
acct.account().click()
cy.wait(6000)
acct.firstAccount().click({ multiple: true })
acct.transferFundsButton().click()
acct.fromAccount().select(fromAccount)
acct.toAccount().select(toSelectBeneficaryAccount)
acct.getAmount().click().type(amount)
acct.getRemarks().click().type(remarks)
acct.transferButton().click()
}


static addMoney(amount){
cy.wait(4000)
acct.account().click()
cy.wait(4000)
acct.firstAccount().click({ multiple: true })
acct.getAddMoneyButton().click()
acct.getAmount().click().type(amount)
acct.getAddButton().click()
}

}
export default AccountsPage;