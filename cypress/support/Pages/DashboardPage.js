
import Dashboard from "../PageObjects/Dashboard";
let das=new Dashboard()
class DashboardPage{

static getDashboardlabel(input){
das.dashboardText().invoke('text').then((dashboardText)=>{
        cy.log('dashboardText')
        expect(dashboardText).to.eq(input);  
      })

}
}
export default DashboardPage;