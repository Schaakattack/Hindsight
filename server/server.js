// ESM
import Fastify from "fastify";
import FastifyCors from '@fastify/cors';
import ScanRoutes from "./src/routes/scan.js";
const fastify = Fastify({ logger: true });
/**
 * Run the server!
 */
const start = async () => {
	try {

		fastify.register(FastifyCors, {
			origin: true
		});

		fastify.register(ScanRoutes);

		fastify.get("/", async (request, reply) => {
			return { msg: "Root of HindSight Server" };
		});

		await fastify.listen({ port: process.env.PORT || 3000 });
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};
start();

