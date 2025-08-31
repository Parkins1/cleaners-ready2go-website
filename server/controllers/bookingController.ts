import type { Request, Response } from "express";
import { z } from "zod";
import { insertBookingSchema } from "../../shared/schema.js";
import type { IStorage } from "../repositories/index.js";
import { createBooking, listBookings } from "../services/bookingService.js";

export const postBooking = (repo: IStorage) => async (req: Request, res: Response) => {
  try {
    const validated = insertBookingSchema.parse(req.body);
    const booking = await createBooking(repo, validated);
    res.json({ success: true, booking });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
};

export const getBookings = (repo: IStorage) => async (_req: Request, res: Response) => {
  try {
    const bookings = await listBookings(repo);
    res.json(bookings);
  } catch {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
