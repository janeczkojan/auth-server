import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';


export class Server {

	private app: express.Application;


	constructor() {
		this.app = express();
		this.applyMiddleware();
	}


	private applyMiddleware() {
		this.app.use(helmet());
		this.app.use(cors());
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
	}
}