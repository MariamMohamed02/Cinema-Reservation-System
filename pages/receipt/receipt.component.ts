import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../../booking';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  booking!: Booking;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.booking = nav?.extras?.state?.['booking'];
  }

  get totalPrice(): number {
    return this.booking.reservedSeats.length * this.booking.movie.seatPrice;
  }
}
