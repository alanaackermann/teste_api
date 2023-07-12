const test = require('tape')
const supertest = require('supertest')
const app = require('./app')

test('teste api 20-5', (t) => {
    supertest(app)
    .get('/aplicarDesconto/20/5')
    .expect('Content-Type',/json/)
    .expect(200)
    .end((err, res) => {
        t.assert(res.body.valorDescontado === 15, 'Desconto correto')
        t.end()
    })
})
