# Relatórios de Testes Cypress

Este diretório contém relatórios gerados pela automação Cypress.

Arquivo principal:

- `site_report.json` — relatório gerado pelo teste `cypress/e2e/check_site.cy.js`.

Formato do `site_report.json` (exemplo):

```json
{
  "url": "https://ideiasonlines.com/",
  "ok": true,
  "status_code": 200,
  "title": "Título da página",
  "h1": ["Heading principal"],
  "h2": ["Subheading 1", "Subheading 2"],
  "fetched_at": "2026-02-15T12:00:00Z"
}
```

Onde:
- `url`: URL verificada
- `ok`: se a requisição foi bem sucedida
- `status_code`: código HTTP retornado
- `title`: conteúdo da tag `<title>` da página
- `h1`, `h2`: arrays com os textos dos headings encontrados
- `fetched_at`: timestamp UTC de quando o relatório foi gerado

Como obter o relatório a partir do GitHub Actions:

1. Após um run do workflow, vá em **Actions** → selecione a execução → **Artifacts**.
2. Baixe o artefato `cypress-report` e extraia o conteúdo; o `site_report.json` estará dentro.

Gerar localmente:

```bash
npm install
npx cypress run
# ou abrir interativo: npx cypress open
```

O relatório será salvo em `cypress-reports/site_report.json` (conforme task configurada em `cypress.config.js`).
