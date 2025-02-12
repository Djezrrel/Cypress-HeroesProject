describe('Usuario-sem-Registrado', () => {
    it('Com Registro', () => {
      cy.visit(' http://localhost:3001')
      cy.get('a > img').click()
      cy.get('[data-cy="like"]').eq(0).click()
      

      cy.get('.gap-4 > .flex-col > .mb-1').contains('like')
      cy.get('.gap-4 > .gap-2 > .undefined').click()
    })})