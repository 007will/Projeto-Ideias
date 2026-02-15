const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ideiasonlines.com',
    setupNodeEvents(on, config) {
      on('task', {
        saveReport({ filename, report }) {
          const outDir = path.join(__dirname, 'cypress-reports')
          if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
          const outPath = path.join(outDir, filename)
          fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8')
          return null
        }
      })
    }
  }
})
