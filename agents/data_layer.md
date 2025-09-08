# Data Layer Guidelines

## Purpose
This file outlines database schemas, ORM usage, and repository patterns for the Cleaners Ready2go website to ensure consistent data management, scalability, and security in handling cleaning services, bookings, and user data.

## Overview
The backend uses Node.js with Prisma as the ORM for database interactions, likely PostgreSQL or SQLite for development. Focus on relational data models for users, services, bookings, and add-ons. All data operations should follow ACID principles and include validation.

## Database Schemas
Use Prisma schema (`prisma/schema.prisma`) to define models. Key models for the project:

- **User**: For customers and admins.
  ```
  model User {
    id        String   @id @default(cuid())
    email     String   @unique
    role      Role     @default(CUSTOMER)
    bookings  Booking[]
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }

  enum Role {
    CUSTOMER
    ADMIN
  }
  ```

- **Service**: Cleaning services and add-ons.
  ```
  model Service {
    id          String   @id @default(cuid())
    name        String   // e.g., "Apartment Recurring Clean"
    description String?
    price       Float
    duration    Int      // in minutes
    icon        String?  // path to icon
    bookings    Booking[]
    createdAt   DateTime @default(now())
  }
  ```

- **Booking**: User reservations.
  ```
  model Booking {
    id          String    @id @default(cuid())
    userId      String
    serviceId   String
    date        DateTime
    status      BookingStatus @default(PENDING)
    totalPrice  Float
    user        User      @relation(fields: [userId], references: [id])
    service     Service   @relation(fields: [serviceId], references: [id])
    createdAt   DateTime  @default(now())
    updatedAt   DateTime  @updatedAt
  }

  enum BookingStatus {
    PENDING
    CONFIRMED
    COMPLETED
    CANCELLED
  }
  ```

- **AddOn**: Optional extras like "Pet Zone".
  ```
  model AddOn {
    id        String   @id @default(cuid())
    name      String
    price     Float
    bookings  BookingAddOn[]
  }

  model BookingAddOn {
    id      String @id @default(cuid())
    bookingId String
    addOnId  String
    booking Booking @relation(fields: [bookingId], references: [id])
    addOn   AddOn   @relation(fields: [addOnId], references: [id])
  }
  ```

Run `npx prisma migrate dev` after schema changes; seed with `prisma db seed`.

## ORM Usage (Prisma)
- **Queries**: Use Prisma Client for type-safe operations. Prefer raw SQL only for complex joins.
  - Example: Fetch user bookings: `const bookings = await prisma.booking.findMany({ where: { userId }, include: { service: true } });`
  - Filtering/Pagination: Use `skip`, `take`, `orderBy` for lists (e.g., recent bookings).
- **Transactions**: Wrap multi-model updates in transactions for consistency (e.g., creating booking and updating availability).
  - Example: `await prisma.$transaction(async (tx) => { await tx.booking.create(...); await tx.user.updateMany(...); });`
- **Relations**: Use `include` or `select` to eager-load related data; avoid over-fetching.
- **Migrations**: Version control schema changes; document in changelog.

## Repository Pattern
- Abstract Prisma Client into repositories in `/server/repositories/` (e.g., BookingRepository.ts).
  - Example:
    ```
    export class BookingRepository {
      constructor(private prisma: PrismaClient) {}
      async createBooking(data: BookingCreateInput) {
        return this.prisma.booking.create({ data });
      }
      async findByUserId(userId: string, skip: number = 0, take: number = 10) {
        return this.prisma.booking.findMany({
          where: { userId },
          include: { service: true },
          skip, take, orderBy: { createdAt: 'desc' }
        });
      }
    }
    ```
- Inject repositories into services/controllers for testability.
- Handle errors in repositories (e.g., throw custom NotFoundError).

## Best Practices
- **Indexing**: Add `@index` on frequent query fields (e.g., userId in Booking).
- **Data Validation**: Integrate Zod with Prisma for input sanitization.
- **Security**: Use parameterized queries (Prisma handles this); sanitize user inputs.
- **Auditing**: Add `createdAt/updatedAt` to models; log changes.
- **Backup/Recovery**: Configure Prisma for production DB backups.
- **Environment**: Use separate DBs for dev/staging/prod; env vars for connection strings.

## Project-Specific Considerations
- **Booking Data**: Ensure date conflicts are checked via unique constraints or queries.
- **Service Icons/Assets**: Store paths in DB, serve from /public/assets/.
- **Integration**: Repositories used in controllers for API endpoints like POST /api/bookings.

## References
- Prisma Docs: [prisma.io](https://www.prisma.io/docs)
- Repository Pattern: [martinfowler.com](https://martinfowler.com/eaaCatalog/repository.html)
- Include summaries: "Adds Booking model migration - Addresses #234".