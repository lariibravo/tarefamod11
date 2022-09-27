/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page' // enderecoPage é um nome aleatório dado para o arquvio importado

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Larissa', 'Castro', 'EBAC TESTE', 'Brasil', 'Av Brasil', '1', 'Sorocaba', 'São Paulo', '14096600', '1699190076', 'teste@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});