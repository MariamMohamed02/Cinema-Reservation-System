// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-seat-reservation',
//   standalone: true,
//   imports: [],
//   templateUrl: './seat-reservation.component.html',
//   styleUrl: './seat-reservation.component.css'
// })
// export class SeatReservationComponent {

// }
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  standalone: true,
  imports:[CommonModule],
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {
  movieId!: string;
  showtime!: string;
  seats: { row: string; number: number; reserved: boolean }[] = [];
  selectedSeats: string[] = [];

  ngOnInit() {
    const params = this.route.snapshot.queryParams;
    this.movieId = params['movieId'];
    this.showtime = params['showtime'];

    const rows = ['A', 'B', 'C', 'D'];
    for (let row of rows) {
      for (let i = 1; i <= 10; i++) {
        this.seats.push({ row, number: i, reserved: false });
      }
    }
  }

  toggleSeat(seat: any) {
    const key = `${seat.row}${seat.number}`;
    if (this.selectedSeats.includes(key)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== key);
    } else {
      this.selectedSeats.push(key);
    }
  }

  confirmReservation() {
    alert(`Seats reserved: ${this.selectedSeats.join(', ')}`);
  }

  constructor(private route: ActivatedRoute) {}
}

