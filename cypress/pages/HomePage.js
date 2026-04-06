// cypress/pages/HomePage.js
class HomePage {
  visit() {
    cy.visit('/')
  }

  getTitle() {
    return cy.document().its('title')
  }

  getH1Elements() {
    return cy.document().then(doc => 
      Array.from(doc.querySelectorAll('h1')).map(e => e.innerText.trim())
    )
  }

  getH2Elements() {
    return cy.document().then(doc => 
      Array.from(doc.querySelectorAll('h2')).map(e => e.innerText.trim())
    )
  }

  extractPageData() {
    return cy.document().then(doc => ({
      title: doc.title || '',
      h1: Array.from(doc.querySelectorAll('h1')).map(e => e.innerText.trim()),
      h2: Array.from(doc.querySelectorAll('h2')).map(e => e.innerText.trim())
    }))
  }
}

export default HomePage