import type { IStorage } from "../repositories/index.js";
import type { InsertContact } from "@shared/schema";

export async function createContact(repo: IStorage, data: InsertContact) {
  return repo.createContact(data);
}

export async function listContacts(repo: IStorage) {
  return repo.getContacts();
}

