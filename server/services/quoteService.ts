import type { IStorage } from "../repositories/index.js";
import type { InsertQuote } from "@shared/schema";

export async function createQuote(repo: IStorage, data: InsertQuote) {
  return repo.createQuote(data);
}

export async function listQuotes(repo: IStorage) {
  return repo.getQuotes();
}

