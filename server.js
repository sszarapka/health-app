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
        break
      case '/pomiary':
        app.render(req, res, '/measurements', query)
        break
      case '/ustawienia':
        app.render(req, res, '/settings', query)
        break
      case '/blog':
        app.render(req, res, '/blog', query)
        break
      case '/blog/nazwa-artykulu':
        app.render(req, res, '/blog/article-title', query)
        break
      case '/odzywianie':
        app.render(req, res, '/nutrition', query)
        break
      case '/odzywianie/dodaj-produkt':
        app.render(req, res, '/nutrition/add-product', query)
        break
      case '/odzywianie/edytuj-produkt':
        app.render(req, res, '/nutrition/edit-product', query)
        break
      case '/odzywianie/znajdz-produkt':
        app.render(req, res, '/nutrition/find-product', query)
        break
      case '/odzywianie/nazwa-przepisu':
        app.render(req, res, '/nutrition/recipe-name', query)
        break
      case '/witaj':
        app.render(req, res, '/welcome', query)
        break
      case '/witaj/zaczynamy':
        app.render(req, res, '/welcome/start', query)
        break
      case '/witaj/aktywnosc':
        app.render(req, res, '/welcome/activity', query)
        break
      case '/witaj/wiek':
        app.render(req, res, '/welcome/age', query)
        break
      case '/witaj/plec':
        app.render(req, res, '/welcome/gender', query)
        break
      case '/witaj/cel':
        app.render(req, res, '/welcome/goal', query)
        break
      case '/witaj/waga':
        app.render(req, res, '/welcome/weigth', query)
        break
      case '/witaj/logowanie':
        app.render(req, res, '/welcome/login', query)
        break
      default:
        handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
