import { contacts, bookings, quotes, type Contact, type Booking, type Quote, type InsertContact, type InsertBooking, type InsertQuote } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  createQuote(quote: InsertQuote): Promise<Quote>;
  getContacts(): Promise<Contact[]>;
  getBookings(): Promise<Booking[]>;
  getQuotes(): Promise<Quote[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private bookings: Map<number, Booking>;
  private quotes: Map<number, Quote>;
  private currentContactId: number;
  private currentBookingId: number;
  private currentQuoteId: number;

  constructor() {
    this.contacts = new Map();
    this.bookings = new Map();
    this.quotes = new Map();
    this.currentContactId = 1;
    this.currentBookingId = 1;
    this.currentQuoteId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const booking: Booking = {
      ...insertBooking,
      id,
      createdAt: new Date(),
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async createQuote(insertQuote: InsertQuote): Promise<Quote> {
    const id = this.currentQuoteId++;
    const quote: Quote = {
      ...insertQuote,
      id,
      createdAt: new Date(),
    };
    this.quotes.set(id, quote);
    return quote;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getQuotes(): Promise<Quote[]> {
    return Array.from(this.quotes.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
