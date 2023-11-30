import "reflect-metadata";
import dotenv from "dotenv";
import { loadCredentials } from "./config/enviroment";
import {connectDB} from "./config/database";
import app from "./app";

export const runServer = () => {
	dotenv.config();
	
	app.listen(app.get("port"), () => {
		console.log(
			"  App is running at http://localhost:%d in %s mode",
			app.get("port"),
			app.get("env")
		);
		console.log("  Press CTRL-C to stop\n");
	});
	
	const connectServices = async (): Promise<void> => {
		const config = loadCredentials();
	
		await connectDB({
			db: config.MONGO_DB,
			host: config.MONGO_HOST,
			pass: config.MONGO_PASS,
			port: config.MONGO_PORT,
			user: config.MONGO_USER,
		});
		console.log(`  Successfully connected to the database`);
	};
	
	connectServices().catch((err: Error) => {
		console.error(err);
	});
}
