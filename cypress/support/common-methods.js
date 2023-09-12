class CommonMethods{


   
  static gettingLength(locator,callback){
        var len;
          cy.xpath(locator)
          .then(listing => {
           len  = Cypress.$(listing).length;
             cy.log(len+"gettingcorrect"); 
                 
      callback({len}) ;  
          })
         
        }
     static selectDropdownOption(locator,dropdownValue){
   
      cy.xpath(locator).select(dropdownValue);
    
    }

    getText(locator){
    
      return cy.xpath(locator).first().invoke('text');

    }

    

    /**
     * The below function take three parameters
     * @param Month  Example : January
     * @param Year   Example : 2022             
     * @param Day    Example : 21
     */
 static selectDate(month, year,day){
    let found =false;
    function findDate(index){
    let arr=[];
    var list;
    cy.xpath("//div[@class='bs-datepicker-head']//span").each((el)=>{
      arr.push(el.text());
      list=arr.toString();
    }).then(()=>{
      var currentmonth;
      var currentyear;
      cy.log(list)
      var res=list.split(",")
      currentmonth =res[1];
      currentyear =res[2]
    if(!(currentmonth===month && currentyear===year)){
    if(year>2021){
    cy.xpath("//button[@class='next']").click()
    return false;
    }
    else{
      cy.xpath("//button[@class='previous']").click()
      return false;
    }
    }
       expect(currentmonth).to.eq(month)
       expect(currentyear).to.eq(year)
       found=true;
       cy.wait(2000)
       cy.xpath("//table[@class='days weeks']//span[text()='"+day+"']").eq(0).click({ multiple: true }) 
        }).then(() => {
      if (!found) {  
     findDate(++index);
          }
        });
        }
        findDate(0)
    }

}
export default CommonMethods;