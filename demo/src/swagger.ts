import { Express } from "express";
import { setup, serve } from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

export const initSwagger = (app: Express) => {
  const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Introduction to swagger with express",
        version: "0.0.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
      },
      servers: [
        {
          url: "http://localhost:4000",
        },
      ],
    },
    apis: ["**/*.ts"],
  };

  const specs = swaggerJsdoc(options);
  app.use(
    "/docs",
    serve,
    setup(specs, {
      explorer: true,
      customCssUrl:
        "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
    }),
  );
};
