describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://curso-sincrotron.web.app/')

    // Buscar el input de login y escribir el email
    cy.get('#formEmail').type('pedro@gmail.com')

    // Buscar el campo de contraseña y escribir la contraseña
    cy.get('#formPassword').type('123456')

    // Hacer clic en el botón "Iniciar Sesión"
    cy.get('button[type="submit"]').click()

    // Verificar que la navegación a la página "hall" sea correcta
    cy.url().should('include', '/hall')
  })
})