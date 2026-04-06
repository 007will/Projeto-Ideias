import HomePage from '../pages/HomePage'

describe('Automação: verificar site Ideias', () => {
  const url = Cypress.config('baseUrl') || 'https://ideiasonlines.com'
  const homePage = new HomePage()

  it('extrai título e headings e salva relatório', () => {
    homePage.visit()
    homePage.extractPageData().then(({ title, h1, h2 }) => {
      const report = {
        url,
        ok: true,
        title,
        h1,
        h2,
        fetched_at: new Date().toISOString()
      }

      cy.task('saveReport', { filename: 'site_report.json', report })
    })
  })
})
