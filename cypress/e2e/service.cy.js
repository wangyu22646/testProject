import '../support/admin.js'
const today = Cypress.dayjs().format('YYYY-MM-DD')
let timestamp=Cypress.dayjs().format('hhmmss')
describe('template spec', () => {

context('template ', () => {
  before(() => {
    cy.intercept('GET', '*/users/me').as('users')
    cy.intercept('GET', '*/organizations/me').as('organizations')
  })

  beforeEach(function(){

        cy.fixture('permissiondata').then((permissiondata)=>
        {
          this.permissiondata=permissiondata
        })
})
  it('check license expired',function() {
    let admindatas=this.permissiondata.admin
    cy.loginWithAdminPermission(admindatas.username,admindatas.password,admindatas.inferred_region,admindatas.active_user,admindatas.name,admindatas.active_org) 
 

  })
})


context('cases', () => {

  beforeEach(function(){
    cy.fixture('servicedata').then((servicedata)=>
    {
        this.servicedata=servicedata
    })


    
})
it('check license expired',function() {

  cy.buildBasicData(this.servicedata.createService,timestamp).then((data)=>
  {
      cy.checkCreateService({displayName:data.displayName,servicename:data.servicename,servicedescription:data.servicedescription}) 
  })   

})
})

})