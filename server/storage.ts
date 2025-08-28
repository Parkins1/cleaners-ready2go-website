import { contacts, bookings, quotes, blogPosts, type Contact, type Booking, type Quote, type BlogPost, type InsertContact, type InsertBooking, type InsertQuote, type InsertBlogPost } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  createQuote(quote: InsertQuote): Promise<Quote>;
  getContacts(): Promise<Contact[]>;
  getBookings(): Promise<Booking[]>;
  getQuotes(): Promise<Quote[]>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(publishedOnly?: boolean): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private bookings: Map<number, Booking>;
  private quotes: Map<number, Quote>;
  private blogPosts: Map<number, BlogPost>;
  private currentContactId: number;
  private currentBookingId: number;
  private currentQuoteId: number;
  private currentBlogPostId: number;

  constructor() {
    this.contacts = new Map();
    this.bookings = new Map();
    this.quotes = new Map();
    this.blogPosts = new Map();
    this.currentContactId = 1;
    this.currentBookingId = 1;
    this.currentQuoteId = 1;
    this.currentBlogPostId = 1;
    
    // Initialize with some sample blog posts
    this.initializeSampleBlogPosts();
  }
  
  private initializeSampleBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "10 Essential House Cleaning Tips for Busy Homeowners",
        excerpt: "Discover time-saving cleaning strategies that will keep your home spotless without overwhelming your schedule.",
        content: "Maintaining a clean home doesn't have to be overwhelming...",
        category: "Tips & Tricks",
        date: "2024-01-15",
        imageUrl: "/api/placeholder/600/400",
        altText: "Clean modern living room",
        slug: "essential-house-cleaning-tips-busy-homeowners",
        published: true
      },
      {
        title: "The Ultimate Guide to Deep Cleaning Your Kitchen",
        excerpt: "Learn professional techniques to deep clean every corner of your kitchen, from appliances to hidden areas.",
        content: "The kitchen is the heart of your home...",
        category: "Deep Cleaning",
        date: "2024-01-10",
        imageUrl: "/api/placeholder/600/400",
        altText: "Sparkling clean kitchen",
        slug: "ultimate-guide-deep-cleaning-kitchen",
        published: true
      },
      {
        title: "Spring Cleaning Checklist: Room by Room Guide",
        excerpt: "A comprehensive room-by-room spring cleaning checklist to refresh your entire home.",
        content: "Spring is the perfect time for a thorough home refresh...",
        category: "Seasonal",
        date: "2024-01-05",
        imageUrl: "/api/placeholder/600/400",
        altText: "Fresh spring cleaning supplies",
        slug: "spring-cleaning-checklist-room-by-room",
        published: true
      }
    ];
    
    samplePosts.forEach(post => this.createBlogPost(post));
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const now = new Date();
    const blogPost: BlogPost = {
      ...insertBlogPost,
      id,
      published: insertBlogPost.published ?? false,
      createdAt: now,
      updatedAt: now,
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  async getBlogPosts(publishedOnly: boolean = false): Promise<BlogPost[]> {
    const posts = Array.from(this.blogPosts.values());
    const filteredPosts = publishedOnly ? posts.filter(post => post.published) : posts;
    return filteredPosts.sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = Array.from(this.blogPosts.values());
    return posts.find(post => post.slug === slug) || null;
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
