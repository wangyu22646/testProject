import {compareDate} from '../support/commands'
const today = Cypress.dayjs().format('YYYY-MM-DD')

describe('template spec', () => {


  before(() => {
    cy.intercept('GET', '*/kong').as('checkexpired')
    cy.visit(Cypress.config('url'))  })

  it('check license expired', () => {
    cy.wait('@checkexpired').then(({ request, response }) => {
      expect(response.statusCode).to.eq(200)
      let results=compareDate(Date.parse(response.body.license.license_expiration_date),Date.parse(today))    
       expect(results).to.eq(true)
    })
    cy.get('.k-alert.global-notification').contains('Your Kong Enterprise License has expired: Enterprise-specific features are now read-only. For more details please refer to the ') 
   
  })
})