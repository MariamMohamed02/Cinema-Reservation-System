import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-receipt',
  templateUrl: './booking-receipt.component.html',
  styleUrls: ['./booking-receipt.component.css']
})
export class BookingReceiptComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { movieTitle: string, showtime: string, seats: number[] }) {}
}
