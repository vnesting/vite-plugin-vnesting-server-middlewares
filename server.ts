import express from "express";
const app = express();
import router from "./router";
export interface ServerInfo {
	host: string;
	root: string;
	port: number;
	app: typeof app;
}
export default function server(i: number): ServerInfo {
	let port = 3000 + (i % 2000);
	let host = "http://localhost";
	let root = "/vnesting-server";
	app.use(root, router);
	app.listen(port, () => {
		console.log(`Hidden server running at ${host}:${port}${root}`);
	});
	return { host, root, port, app };
}
