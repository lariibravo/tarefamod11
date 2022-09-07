/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Devo selecionar um produto da lista', () => {
        //        cy.get('.product-block').first().click() -- utilizando apenas uma class

        // utilizando mais de uma classe
        cy.get('[class="product-block grid"]')
            // .first() --primeiro da lista
            // .last() -- o último da lista
            // .eq(4) -- pega determinado item da lista
            .contains('Argus All-Weather Tank')
            .click()

    });

    it('Devo adicionar um produto ao carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]').contains('Argus All-Weather Tank').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Gray').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    
    });

});