
import users from '../fixtures/users.json'
import cards from '../support/Pages/CardsPage'
import dashboard from '../support/Pages/DashboardPage'
import account from '../support/Pages/AccountsPage'

describe('template spec', () => {


  beforeEach(function () {
  
   cy.visit("https://dev-brightbank.onwavemaker.com/#/LoginOrSignup")
    cy.login(users.user1)
    })
   
   

    it('VerifyDashboardData', ()=>{
     dashboard.getDashboardlabel('Dashboard')

    })
  
     it('VerifyUserIsAbleToCreateNewAccount', () => {
      account.createNewAccount('Onecard','EUR €','Deposit')
   
       })



       it('VerifyUserIsAbleToTransferAmount', () => {
        account.transferfund('Savings 123 - GBP','PersonalUse - Nagesh Bonagiri - GBP','1000','Transferd amount')
         })
     
      
    
      it('VerifyUserIsAbleToAddMoneyToAccount', () => {
      
          account.addMoney('1000')
  
           })

         
  



  })