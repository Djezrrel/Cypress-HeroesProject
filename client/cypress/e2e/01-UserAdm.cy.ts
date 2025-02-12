
import 'cypress-file-upload';
const filePath = 'anime.png'

describe('UsuarioRegistrado', () => {
    it('Com Registro', () => {
      cy.visit(' http://localhost:3001')
      cy.get('.undefined').click()
    
      cy.get('[data-cy="email"]').type("admin@test.com")
      cy.get('[data-cy="password"]').type("test123")
  
      cy.get('.flex > .undefined').click()

      //criar novo Heroi
      cy.get('a > .undefined').click()

      cy.get('[data-cy="nameInput"]').type('batman123')
      cy.get('[data-cy="priceInput"]').type('9020')
      cy.get('[data-cy="fansInput"]').type('10')
      cy.get('[data-cy="savesInput"]').type('10')

      //selecionando varios
      cy.get('select[multiple]').select(['1'], { force: true });
      //colocando foto
      cy.get('[data-cy="avatarFile"]').attachFile(filePath)

      //vendo se pag tem o botao
      cy.get('.px-8 > .flex').contains('Submit').click()

      //verifica se criou o heroi
      cy.get('.flex-wrap').contains('batman123')

      //reagindo
      cy.get('[data-cy="price"]').contains('$9.020')
      cy.get('[data-cy="like"]').click()
      cy.get('[data-cy="fans"]').contains('11')
      cy.get('[data-cy="money"]').eq(7).click()
      cy.get('.gap-2 > .text-white').click()
      cy.get('[data-cy="saves"]').contains('11')
      cy.get('[data-cy="pencil"]').eq(7).click()

      //vontado ao menu
      cy.get('a > img').click()

      cy.get('[data-cy="trash"]').eq(7).click()
      cy.get('.gap-2 > .text-white').click()

      //saindo
      cy.get('nav > .flex > :nth-child(2) > .undefined').click()

  
     
    })})