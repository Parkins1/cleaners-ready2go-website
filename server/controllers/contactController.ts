import type { Request, Response } from "express";
import { z } from "zod";
import { insertContactSchema } from "../../shared/schema.js";
import type { IStorage } from "../repositories/index.js";
import { createContact, listContacts } from "../services/contactService.js";

export const postContact = (repo: IStorage) => async (req: Request, res: Response) => {
  try {
    const validated = insertContactSchema.parse(req.body);
    const contact = await createContact(repo, validated);
    res.json({ success: true, contact });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, message: "Validation error", errors: error.issues });
    } else {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
};

export const getContacts = (repo: IStorage) => async (_req: Request, res: Response) => {
  try {
    const contacts = await listContacts(repo);
    res.json(contacts);
  } catch {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
