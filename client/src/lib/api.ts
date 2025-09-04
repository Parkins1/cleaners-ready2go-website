import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import {
  insertContactSchema,
  insertBookingSchema,
  insertQuoteSchema,
  type InsertContact,
  type InsertBooking,
  type InsertQuote,
} from "@shared/schema";

async function postJson<TInput extends object, TOut extends z.ZodTypeAny>(
  url: string,
  data: TInput,
  outSchema?: TOut,
): Promise<z.infer<TOut> | unknown> {
  const res = await apiRequest("POST", url, data);
  // Attempt to parse JSON body; allow empty response
  const text = await res.text();
  if (!text) return undefined as unknown;
  const json = JSON.parse(text);
  return outSchema ? outSchema.parse(json) : json;
}

export async function submitContact(input: InsertContact) {
  // Validate on client before sending
  const payload = insertContactSchema.parse(input);
  return postJson("/api/contacts", payload);
}

export async function submitBooking(input: InsertBooking) {
  const payload = insertBookingSchema.parse(input);
  return postJson("/api/bookings", payload);
}

export async function submitQuote(input: InsertQuote) {
  const payload = insertQuoteSchema.parse(input);
  return postJson("/api/quotes", payload);
}

