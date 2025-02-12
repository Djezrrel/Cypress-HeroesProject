
describe('Usuarioregistrado', () => {
    it('Com registro', () => {
      cy.visit(' http://localhost:3001')
      cy.get('.undefined').click()

      //logando
      cy.get('[data-cy="email"]').type("test@test.com")
      cy.get('[data-cy="password"]').type("test123")
      cy.get('.flex > .undefined').click()
    
      //indo para pag
      cy.get('a > img').click()

      //interagindo
      //ver com quem
      cy.get('.flex-wrap').contains('Smoker')
      cy.get('[data-cy="like"]').eq(0).click()
      cy.get('[data-cy="money"]').eq(0).click()
      cy.get('.text-white').click()
      cy.get('[data-cy="saves"]').contains('40')

      //saindo
      cy.get('li > .undefined').click()
      cy.get('li > .undefined').contains('Login')
      

      
    })
    
  });