import { BookingRepository } from '../repositories/BookingRepository';
import { PrismaClient } from '@prisma/client';
import { Booking, BookingStatus } from '@prisma/client';

export class BookingService {
  private bookingRepository: BookingRepository;

  constructor(private prisma: PrismaClient) {
    this.bookingRepository = new BookingRepository(prisma);
  }

  async createBooking(data: {
    userId: string;
    serviceId: string;
    date: Date;
    totalPrice: number;
    addOns?: string[];
  }) {
    // Add business logic here (e.g., validation, pricing calculations)
    const bookingData = {
      userId: data.userId,
      serviceId: data.serviceId,
      date: data.date,
      totalPrice: data.totalPrice,
      status: BookingStatus.PENDING,
    };

    const booking = await this.bookingRepository.createBooking(bookingData);

    // Handle add-ons if provided
    if (data.addOns && data.addOns.length > 0) {
      for (const addOnId of data.addOns) {
        await this.prisma.bookingAddOn.create({
          data: {
            bookingId: booking.id,
            addOnId,
          },
        });
      }
    }

    return booking;
  }

  async getUserBookings(userId: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    return this.bookingRepository.findByUserId(userId, skip, limit);
  }

  async confirmBooking(id: string) {
    return this.bookingRepository.updateBooking(id, {
      status: BookingStatus.CONFIRMED,
    });
  }

  async cancelBooking(id: string) {
    return this.bookingRepository.updateBooking(id, {
      status: BookingStatus.CANCELLED,
    });
  }

  async getBookingById(id: string) {
    return this.bookingRepository.findById(id);
  }

  async getUpcomingBookings(limit: number = 10) {
    return this.bookingRepository.getUpcomingBookings(limit);
  }

  async getBookingsByStatus(status: BookingStatus) {
    return this.bookingRepository.getBookingsByStatus(status);
  }
}
