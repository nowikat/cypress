/// <reference types="cypress" />

describe('HTTPBin API Tests', () => {
    const baseUrl = 'https://httpbin.org';
  
    it('GET request', () => {
      cy.request(`${baseUrl}/get`)
        .its('status')
        .should('equal', 200);
    });
  
    it('POST request', () => {
      cy.request('POST', `${baseUrl}/post`, { name: 'Cypress' })
        .its('status')
        .should('equal', 200);
    });
  
    it('PUT request', () => {
      cy.request('PUT', `${baseUrl}/put`, { name: 'Cypress' })
        .its('status')
        .should('equal', 200);
    });
  
    it('DELETE request', () => {
      cy.request('DELETE', `${baseUrl}/delete`)
        .its('status')
        .should('equal', 200);
    });
  
    it('Sending and verifying standard header', () => {
      cy.request({
        url: `${baseUrl}/headers`,
        headers: {
          'User-Agent': 'Cypress'
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.headers['User-Agent']).to.equal('Cypress');
      });
    });
  
    it('Sending and verifying custom header', () => {
      cy.request({
        url: `${baseUrl}/headers`,
        headers: {
          'X-Custom-Header': 'CustomValue'
        }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.headers['X-Custom-Header']).to.equal('CustomValue');
      });
    });
  
    it('Sending query parameters', () => {
      const params = { param1: 'value1', param2: 'value2' };
      cy.request({
        url: `${baseUrl}/get`,
        qs: params
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.args).to.deep.equal(params);
      });
    });
  
    it('Sending random query parameter', () => {
      const randomValue = Math.random().toString(36).substring(7);
      cy.request({
        url: `${baseUrl}/get`,
        qs: { random: randomValue }
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.args.random).to.equal(randomValue);
      });
    });
  
    it('Checking response body', () => {
      cy.request(`${baseUrl}/get`)
        .its('body')
        .should('have.property', 'url')
        .and('include', `${baseUrl}/get`);
    });
  
    it('Checking request duration', () => {
      cy.request(`${baseUrl}/delay/1`).then(response => {
        expect(response.duration).to.be.lessThan(2000);
      });
    });
  });
  