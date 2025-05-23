// src/app/booking.ts
export interface Booking {
  user: {
    name: string;
    email: string;
    phone: string;
  };
  movie: {
    name: string;
    Id: string;
    image: string;
    availableTimes: string[];
    seatPrice: number;
  };
  reservedSeats: string[];
  paymentMethod: 'visa' | 'cash';
  timeReserved: Date;
}
