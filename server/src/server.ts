import fastify from 'fastify'

const app = fastify()

// criando rotas
app.get('/hello', () => {
  return 'hello world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server running on localhost😎')
  })
