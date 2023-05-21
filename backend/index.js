// Required modules
const express = require("express");
const route = require("./routes/routes");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Create express app
const app = express();
const port = 8080;
const swaggerOptions = {
	swaggerDefinition: {
		info:{
			title: "API",
			version: "1.0.0"
		}
	},
	apis: ["index.js", "./routes/*.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Middleware and routes
app.use(express.json());
app.use(cors({origin: "http://localhost:4200", credentials: true}));
app.use("/", route);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.listen(port, () => 
{console.log(`Example app listening at http://localhost:${port}`);}
);

// Export module app
module.exports = app;