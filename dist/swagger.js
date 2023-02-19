"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSwagger = void 0;
const swagger_ui_express_1 = require("swagger-ui-express");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const initSwagger = (app) => {
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "LogRocket Express API with Swagger",
                version: "0.1.0",
                description: "This is a simple CRUD API application made with Express and documented with Swagger",
                license: {
                    name: "MIT",
                    url: "https://spdx.org/licenses/MIT.html",
                },
                contact: {
                    name: "LogRocket",
                    url: "https://logrocket.com",
                    email: "info@email.com",
                },
            },
            servers: [
                {
                    url: "http://localhost:3000/books",
                },
            ],
        },
        apis: ["./routes/*.ts"],
    };
    const specs = (0, swagger_jsdoc_1.default)(options);
    app.use("/api-docs", swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(specs, {
        explorer: true,
        customCssUrl: "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
    }));
};
exports.initSwagger = initSwagger;
