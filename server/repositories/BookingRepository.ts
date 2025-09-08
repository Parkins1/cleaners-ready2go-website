import { PrismaClient, Booking, BookingStatus } from '@prisma/client';

type BookingCreateInput = {
  userId: string;
  serviceId: string;
  date: Date;
  status?: BookingStatus;
  totalPrice: number;
  notes?: string;
};

export class BookingRepository {
  constructor(private prisma: PrismaClient) {}

  async createBooking(data: BookingCreateInput): Promise<Booking> {
    return this.prisma.booking.create({
      data,
      include: {
        service: true,
        user: true,
        addOns: {
          include: {
            addOn: true,
          },
        },
      },
    });
  }

  async findByUserId(userId: string, skip: number = 0, take: number = 10) {
    return this.prisma.booking.findMany({
      where: { userId },
      include: {
        service: true,
        addOns: {
          include: {
            addOn: true,
          },
        },
      },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string): Promise<Booking | null> {
    return this.prisma.booking.findUnique({
      where: { id },
      include: {
        service: true,
        user: true,
        addOns: {
          include: {
            addOn: true,
          },
        },
      },
    });
  }

  async updateBooking(id: string, data: Partial<BookingCreateInput>): Promise<Booking> {
    return this.prisma.booking.update({
      where: { id },
      data,
      include: {
        service: true,
        user: true,
        addOns: {
          include: {
            addOn: true,
          },
        },
      },
    });
  }

  async deleteBooking(id: string): Promise<Booking> {
    return this.prisma.booking.delete({
      where: { id },
      include: {
        service: true,
        user: true,
      },
    });
  }

  async getBookingsByStatus(status: BookingStatus) {
    return this.prisma.booking.findMany({
      where: { status },
      include: {
        service: true,
        user: true,
        addOns: {
          include: {
            addOn: true,
          },
        },
      },
      orderBy: { date: 'asc' },
    });
  }

  async getUpcomingBookings(limit: number = 10) {
    const now = new Date();
    return this.prisma.booking.findMany({
      where: {
        date: {
          gte: now,
        },
        status: {
          in: ['PENDING', 'CONFIRMED'],
        },
      },
      include: {
        service: true,
        user: true,
      },
      orderBy: { date: 'asc' },
      take: limit,
    });
  }
}