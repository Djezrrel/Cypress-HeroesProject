
describe('Usuario não registrado', () => {
  it('Sem Registro', () => {
    cy.visit(' http://localhost:3001')
    cy.get('.undefined').click()
  
    cy.get('[data-cy="email"]').type("Alexante123@")
    cy.get('[data-cy="password"]').type("Teste@")

    cy.get('.flex > .undefined').click()

    cy.get(':nth-child(1) > .text-red-500').contains('Email is not valid')
  })
  
});
    it('Registro errado', () => {
    cy.visit(' http://localhost:3001')
    cy.get('.undefined').click()

    cy.get('.flex > .undefined').click()

    cy.get('.text-red-500').contains('Email is required')
    cy.get(':nth-child(2) > .text-red-500').contains('Password is required')

  })
