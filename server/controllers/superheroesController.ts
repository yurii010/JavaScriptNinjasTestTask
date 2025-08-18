import prisma from "../prisma/prismaClient";
import { Request, Response } from "express";
import { SuperheroesTypes, GeneralTypes } from "../types";

export const getAllSuperheroes = async (req: Request, res: Response<SuperheroesTypes.Superhero[] | GeneralTypes.ApiResponse>) => {
  try {
    const superheroes = await prisma.superhero.findMany();

    if (!superheroes) {
      return res.status(404).json({ error: "Unable to load superheroes" });
    }

    res.status(200).json(superheroes);
  } catch (error) {
    res.status(500).json({ message: "Unable to load all superheroes", error });
  }
};

export const getSuperheroById = async (req: Request<SuperheroesTypes.ParamsId>, res: Response<SuperheroesTypes.Superhero | GeneralTypes.ApiResponse>) => {
  try {
    const { id } = req.params as SuperheroesTypes.ParamsId;

    if (!id) {
      return res.status(400).json({ error: "Missing 'id' parameter" });
    }

    const superheroId = Number(id);
    const superhero = await prisma.superhero.findUnique({
      where: { id: superheroId },
    });

    if (!superhero) {
      return res.status(404).json({ error: "Superhero not found" });
    }

    res.status(200).json(superhero);
  } catch (error) {
    res.status(500).json({ message: "Unable to load superhero", error });
  }
};

export const addSuperhero = async (req: Request<SuperheroesTypes.SuperheroPayload>, res: Response<GeneralTypes.ApiResponse>) => {
  try {
    const { nickname, real_name, origin_description, superpowers, catch_phrase, image } = req.body;

    if (!nickname || !real_name || !origin_description || !superpowers || !catch_phrase) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await prisma.superhero.create({
      data: {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        image: image?.trim() || process.env.DEFAULT_EMPTY_IMAGE,
      },
    });

    res.status(200).json({ message: "Superhero added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to add superhero", error });
  }
};

export const updateSuperhero = async (req: Request<SuperheroesTypes.SuperheroPayload>, res: Response<GeneralTypes.ApiResponse>) => {
  try {
    const { id, nickname, real_name, origin_description, superpowers, catch_phrase, image } = req.body;

    const superheroId = Number(id);
    const superhero = await prisma.superhero.findUnique({
      where: { id: superheroId },
    });

    if (!nickname || !real_name || !origin_description || !superpowers || !catch_phrase) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!superhero) {
      return res.status(404).json({ error: "Superhero not found" });
    }

    await prisma.superhero.update({
      where: { id: superheroId },
      data: {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        image: image?.trim() || process.env.DEFAULT_EMPTY_IMAGE,
      },
    });

    res.status(200).json({ message: "Superhero updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Unable to update superhero", error });
  }
};

export const deleteSuperheroById = async (req: Request<SuperheroesTypes.ParamsId>, res: Response<GeneralTypes.ApiResponse>) => {
  try {
    const { id } = req.params as SuperheroesTypes.ParamsId;

    if (!id) {
      return res.status(400).json({ error: "Missing 'id' parameter" });
    }

    const superheroId = Number(id);
    const superhero = await prisma.superhero.findUnique({
      where: { id: superheroId },
    });

    if (!superhero) {
      return res.status(404).json({ error: "Superhero not found" });
    }

    await prisma.superhero.delete({ where: { id: superheroId } });

    res.status(200).json({ message: "Successfully delete superhero" });
  } catch (error) {
    res.status(500).json({ message: "Unable to delete superhero", error });
  }
};
