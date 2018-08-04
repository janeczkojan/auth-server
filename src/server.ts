import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { ServerConfig } from './config';


export class Server {

	private app: express.Application;


	constructor() {
		this.app = express();
		this.applyMiddleware();
		this.applyRoutes();
	}


	private applyMiddleware() {
		this.app.use(helmet());
		this.app.use(cors());
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
	}

	private applyRoutes() {

	}

	public start() {
		this.app.listen(ServerConfig.PORT, (err: any) => {
			if (!err) {
				console.log(`Listening on port ${ServerConfig.PORT}`);
			}
			else {
				console.error('ERROR', err);
			}
		});
	}
}