describe('Automação: verificar site Ideias', () => {
  const url = Cypress.config('baseUrl') || 'https://ideiasonlines.com'

  it('extrai título e headings e salva relatório', () => {
    cy.visit('/')
    cy.document().then((doc) => {
      const title = doc.title || ''
      const h1s = Array.from(doc.querySelectorAll('h1')).map(e => e.innerText.trim())
      const h2s = Array.from(doc.querySelectorAll('h2')).map(e => e.innerText.trim())

      const report = {
        url,
        ok: true,
        title,
        h1: h1s,
        h2: h2s,
        fetched_at: new Date().toISOString()
      }

      cy.task('saveReport', { filename: 'site_report.json', report })
    })
  })
})
