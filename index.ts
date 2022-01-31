import { ViteDevServer } from "vite";
import createServer from "./server";
import request from "request";
const vnestingDevServer = (config: any) => {
	let serverInfo = createServer(0);
	return {
		name: "configure-server",
		handleHotUpdate() {},
		configureServer(server: ViteDevServer) {
			return () => {
				server.middlewares.use(serverInfo.root, (req, res, next) => {
					let url = `${serverInfo.host}:${serverInfo.port}${req.originalUrl}`;
					console.log(url);
					request(url, req, (err, body) => {
						res.write(body);
						next();
					});
				});
			};
		},
	};
};
export default vnestingDevServer;
