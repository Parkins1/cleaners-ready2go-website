import type { IStorage } from "../repositories/index.js";
import type { InsertBooking } from "@shared/schema";

export async function createBooking(repo: IStorage, data: InsertBooking) {
  return repo.createBooking(data);
}

export async function listBookings(repo: IStorage) {
  return repo.getBookings();
}