import cors from "cors";
import path from "path";
import express from "express";
import * as superheroesController from "./controllers/superheroesController";

const app = express();
const buildPath = path.join(__dirname, "../../client/build");

app.use(cors());
app.use(express.json());

app.get("/api/superheroes", superheroesController.getAllSuperheroes);
app.get("/api/superhero/:id", superheroesController.getSuperheroById);
app.post("/api/superhero", superheroesController.addSuperhero);
app.put("/api/superhero", superheroesController.updateSuperhero);
app.delete("/api/superhero/:id", superheroesController.deleteSuperheroById);

const isDev = process.env.MODE === "dev";

if (!isDev) {
  app.use(express.static(buildPath));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

export default app;
