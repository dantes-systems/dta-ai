import express from "express";
import bodyParser from "body-parser";

export const initServer = (port: number) => {
  const app = express();
  app.use(bodyParser.json());

  app.listen(port, () => {
    console.log(`Admin dashboard running on http://localhost:${port}`);
  });

  return app;
};