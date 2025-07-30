

Cypress.Commands.add('loginWithAdminPermission', (username,password,inferred_region,active_user,name,active_org) => {


    cy.visit('https://cloud.konghq.com/?loginSuccess=true')

    cy.wait(20000)
    // cy.window().then((win) => {
    //     cy.stub(win, 'open').as('Open');
    //   });
    // cy.origin('https://cloud.konghq.com', { args: { username } }, ({ username }) => {
    //     cy.visit('/login?')
    //         cy.wait(3000)
    //    cy.get('button[data-testid="return-to-login-button"]').click()
       
    //     // Commands are executed in secondary origin
    //     cy.get('#username').type(username)
    //   })


// cy.origin(
//   'https://signin.cloud.konghq.com/login?',
//   {
//     args: {
//       username,
//     },
//   },
//   ({ username }) => {
//     cy.get('#username', {timeout: 15000}).type(username, {
//       log: false,
//     })

//   }
// )


//    cy.visit('https://signin.cloud.konghq.com/u/login/identifier?state=hKFo2SBXM0xxT1BFVXJ5RkVZYzUyWmEzOWtlRDQ3aW1KNGloVKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEw4SHc4YlhSdlRXR2txNzBQNEZwaF9Wck9SeGVFbXZYo2NpZNkgVWVjOTVoa3VRTmR0eDE4UzZvS0dsS0dJaElGNVQ0cHg') 

//     cy.wait(10000)
   

    // cy.get('#username').type(username)

    // cy.get('.ulp-authenticator-selector-text').type(username)
    // cy.get('#password').type(password)
    // cy.click('[type="submit"]').contains('Continue').click();
    // cy.checkAdminPermission_users(username,inferred_region,active_user) ;
    // cy.checkAdminPermission_organizations({name,active_org})

})


Cypress.Commands.add('checkAdminPermission_users', (username,inferred_region,active_user) => {

    cy.wait('@users').then(({ request, response }) => {
        expect(response.statusCode).to.eq(200)
         expect(response.active).to.eq(active_user)
         expect(response.email).to.eq(username)
         expect(response.inferred_region).to.eq(inferred_region)
      })


})


Cypress.Commands.add('checkAdminPermission_organizations', ({name,active_org}) => {
cy.wait('@organizations').then(({ request, response }) => {
    expect(response.statusCode).to.eq(200)
     expect(response.name).to.eq(name)
     expect(response.active).to.eq(active_org)   
     //expect(response.retention_period_days).to.eq(retention_period_days)  this one need a calculation to get the how many days, would better add a common function to check
  })


})

Cypress.Commands.add('checkCreateService', ({displayName,servicename,servicedescription}) => {
    cy.get('[data-testid="entity-create-button"]').click()
    cy.get('[data-testid="service-display-name"]').type(displayName)
    cy.get('[data-testid="service-name"]').type(servicename)
    cy.get('[data-testid="service-description"]').type(servicedescription)
    cy.get('[data-testid="service-submit-button"][disabled]').should('not.exist')
    cy.get('[data-testid="service-submit-button"]').click()
})


