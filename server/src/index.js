// ESM
import Fastify from 'fastify'
import ScanRoute from './routes/scan-route.js'
const fastify = Fastify({ logger: true })

fastify.register(ScanRoute)
fastify.get('/', async (request, reply) => {
  return {'msg': 'Root of HindSight Server'}
})



/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()