
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookingReceiptComponent } from '../booking-receipt/booking-receipt.component';
import { MatDialog } from '@angular/material/dialog';
interface Seat {
  row: string;
  number: number;
  id: number;
}

interface GroupedSeats {
  [row: string]: Seat[];
}

@Component({
  selector: 'app-seat-reservation',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {
  groupedSeats: GroupedSeats = {};
  selectedSeats: number[] = [];
  movieTitle: string = '';

  showtime: string = '';
  movieId!: number;
  showtimeId!: number;

  constructor(private http: HttpClient, private dialog: MatDialog,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = Number(params.get('movieId'));
      this.showtimeId = Number(params.get('showtimeId'));
      this.fetchAvailableSeats();
    });
  }

 fetchAvailableSeats(): void {
  const url = `http://127.0.0.1:8000/api/available-seats/${this.movieId}/${this.showtimeId}/`;

  const token = localStorage.getItem('token'); // Adjust if you use a different storage mechanism

  const headers = {
    'Authorization': `Bearer ${token}`
  };

  this.http.get<any>(url, { headers }).subscribe({
    next: (response) => {
      this.movieTitle = response.movie_title;

      this.showtime = response.showtime_start;
      this.groupedSeats = this.groupSeatsByRow(response.available_seats);
    },
    error: (err) => {
      console.error('Failed to fetch seats:', err);
    }
  });
}

  private groupSeatsByRow(seats: Seat[]): GroupedSeats {
    const grouped: GroupedSeats = {};
    for (const seat of seats) {
      if (!grouped[seat.row]) {
        grouped[seat.row] = [];
      }
      grouped[seat.row].push(seat);
    }
    return grouped;
  }

  toggleSeatSelection(seatId: number): void {
    const index = this.selectedSeats.indexOf(seatId);
    if (index > -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push(seatId);
    }
  }

  isSelected(seatId: number): boolean {
    return this.selectedSeats.includes(seatId);
  }
confirmSelection(): void {
  const token = localStorage.getItem('token'); // Or however you store the token

  if (!token) {
    console.error('No token found!');
    return;
  }

  const url = 'http://127.0.0.1:8000/api/reserve/';
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  const body = {
    showtime_id: this.showtimeId,
    seat_ids: this.selectedSeats
  };

  this.http.post(url, body, { headers }).subscribe({
    next: (response) => {
      console.log('Reservation successful:', response);
      //alert('Seats reserved successfully!');
      // Optionally redirect or refresh seat list
       this.dialog.open(BookingReceiptComponent, {
      data: {
        movieTitle: this.movieTitle,
        showtime: this.showtime,
        seats: this.selectedSeats
      }
    });
    },
    error: (error) => {
      console.error('Reservation failed:', error);
      alert('Failed to reserve seats.');
    }
  });
}

}
