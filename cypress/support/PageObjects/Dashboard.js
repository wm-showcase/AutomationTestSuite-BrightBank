class Dashboard{


    constructor(){
        this.Accounts="//span[text()='Accounts']"
        this.AddAccount="//button[@name='buttonAddAccount']"
        this.Dashboard_Label="//label[@class='app-label animated fadeInDown f-xl font-semibold']"

    }


    dashboardText(){
        return cy.xpath(this.Dashboard_Label);
    }

  
}

export default Dashboard;