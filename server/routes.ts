import type { Express } from "express";
// Explicit .js extension for Node ESM on Vercel
import { storage } from "./storage.js";
import { postContact, getContacts } from "./controllers/contactController.js";
import { postBooking } from "./controllers/bookingController.js";
import { postQuote } from "./controllers/quoteController.js";
import { postBlog, listBlogs, getBlogBySlug } from "./controllers/blogController.js";

export function registerRoutes(app: Express): void {
  // Contact form submission
  app.post("/api/contacts", postContact(storage));

  // Booking submission
  app.post("/api/bookings", postBooking(storage));

  // Quote request submission
  app.post("/api/quotes", postQuote(storage));

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", getContacts(storage));

  // Blog post routes
  app.post("/api/blog-posts", postBlog(storage));
  app.get("/api/blog-posts", listBlogs(storage));
  app.get("/api/blog-posts/:slug", getBlogBySlug(storage));

  // Routes registered on the provided Express app. No server is created here.
}
