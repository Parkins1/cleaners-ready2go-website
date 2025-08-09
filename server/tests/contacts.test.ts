import request from "supertest";
import express, { Express } from "express";
import { registerRoutes } from "../routes";

describe("Contacts API", () => {
  let app: Express;

  beforeAll(async () => {
    app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    await registerRoutes(app);
  });

  it("should create a new contact with valid data", async () => {
    const validData = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "1234567890",
      serviceType: "Residential",
      message: "Hello",
    };

    const res = await request(app).post("/api/contacts").send(validData);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.contact).toMatchObject(validData);
    expect(res.body.contact.id).toBeDefined();
    expect(res.body.contact.createdAt).toBeDefined();
  });

  it("should return 400 for invalid data", async () => {
    const invalidData = {
      firstName: "",
      lastName: "Doe",
      email: "not-an-email",
      phone: "123",
      serviceType: "Residential",
      message: "",
    };

    const res = await request(app).post("/api/contacts").send(invalidData);

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Validation error");
    expect(res.body.errors).toBeInstanceOf(Array);
  });

  it("should get all contacts", async () => {
    const validData = {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
      phone: "0987654321",
      serviceType: "Move-Out",
      message: "Test",
    };

    await request(app).post("/api/contacts").send(validData);
    const res = await request(app).get("/api/contacts");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body[0]).toMatchObject(validData);
  });
});