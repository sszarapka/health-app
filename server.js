// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    switch (pathname) {
      case '/':
        app.render(req, res, '/', query)
      case '/pomiary':
        app.render(req, res, '/measurements', query)
      case '/ustawienia':
        app.render(req, res, '/settings', query)
      case '/blog':
        app.render(req, res, '/blog', query)
      case '/blog/nazwa-artykulu':
        app.render(req, res, '/blog/article-title', query)
      case '/odzywianie':
        app.render(req, res, '/nutrition', query)
      case '/odzywianie/dodaj-produkt':
        app.render(req, res, '/nutrition/add-product', query)
      case '/odzywianie/edytuj-produkt':
        app.render(req, res, '/nutrition/edit-product', query)
      case '/odzywianie/znajdz-produkt':
        app.render(req, res, '/nutrition/find-product', query)
      case '/odzywianie/nazwa-przepisu':
        app.render(req, res, '/nutrition/recipe-name', query)
      case '/witaj':
        app.render(req, res, '/welcome', query)
      case '/witaj/zaczynamy':
        app.render(req, res, '/welcome/start', query)
      case '/witaj/aktywnosc':
        app.render(req, res, '/welcome/activity', query)
      case '/witaj/wiek':
        app.render(req, res, '/welcome/age', query)
      case '/witaj/plec':
        app.render(req, res, '/welcome/gender', query)
      case '/witaj/cel':
        app.render(req, res, '/welcome/goal', query)
      case '/witaj/waga':
        app.render(req, res, '/welcome/weigth', query)
      case '/witaj/logowanie':
        app.render(req, res, '/welcome/login', query)
      default:
        handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
