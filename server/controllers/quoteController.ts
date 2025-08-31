import type { Request, Response } from "express";
import { z } from "zod";
import { insertQuoteSchema } from "../../shared/schema.js";
import type { IStorage } from "../repositories/index.js";
import { createQuote, listQuotes } from "../services/quoteService.js";

export const postQuote = (repo: IStorage) => async (req: Request, res: Response) => {
  try {
    const validated = insertQuoteSchema.parse(req.body);
    const quote = await createQuote(repo, validated);
    res.json({ success: true, quote });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
};

export const getQuotes = (repo: IStorage) => async (_req: Request, res: Response) => {
  try {
    const quotes = await listQuotes(repo);
    res.json(quotes);
  } catch {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
