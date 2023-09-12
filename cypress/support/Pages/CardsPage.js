import Cards from "../PageObjects/Cards";
let card=new Cards()

class CardsPage{


static applyForNewCard(creditcard,typeOfCard,currency,primaryUse,name, number,firstName,lastName,email,addressSearch, enterStreetAddress, enterApartment){
card.Cards().click()
cy.wait(5000)
card.applyForCard().click()
cy.wait(6000)
card.selectCard(creditcard).click({ multiple: true })
card.selectCardType(typeOfCard).click()
card.selectCurrency(currency).click()
card.PrimaryUse().click().type(primaryUse)
card.CardHoldername().click().type(name)
card.MobileNumber().click().type(number)
card.firstname().click().type(firstName)
card.lastName().click().type(lastName)
card.email().click().type(email)
card.AddressSearch().click().type(addressSearch)
card.StreetAddress().click().type(enterStreetAddress)
card.apartMent().click().type(enterApartment)
card.ApplyButton().click()
}
}
export default CardsPage;