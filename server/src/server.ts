import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
// conexão com o banco de dados
const prisma = new PrismaClient()

// criando rotas
app.get('/hello', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server running on localhost😎')
  })
