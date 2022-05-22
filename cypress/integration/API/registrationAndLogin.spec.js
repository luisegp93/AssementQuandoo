describe('E2E Test for Registration & Login', () => {
    const password = "examplePassword";
    let email;
    let token;

  it('Get user email step', () => {

    cy.request('https://reqres.in/api/users/2').as('singleUser')
    cy.get('@singleUser').then(response => {
            email = response.body.data.email;
      })
    })

    it('Registration step', () => {  
        cy.request({
        method: 'post',
        url: "https://reqres.in/api/register",
        headers: {},
        failOnStatusCode: false,
        body: {
          "email": email,
          "password": password
      },
        response: [],
      }).then((response) => token = response.body.token).wait(1000);

    })

    it('Login step', () => {
      cy.request({
        method: 'post',
        url: "https://reqres.in/api/login",
        headers: {},
        failOnStatusCode: false,
        body: {
          "email": email,
          "password": password
      },
        response: [],
      }).then((response) => expect(response.body.token).to.contain(token)).wait(1000);
    })
})

    
  

//     cy.request('https://reqres.in/api/users/2').as('singleUser')

//   cy.get('@singleUser').then((response) => {
//   cy.log(response.body.data.email);
// })



    
//   });

