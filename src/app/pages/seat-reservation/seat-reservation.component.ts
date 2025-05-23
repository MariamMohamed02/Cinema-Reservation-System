// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute, RouterLinkActive, RouterModule } from '@angular/router';
// // import { HttpClient } from '@angular/common/http';
// // import { CommonModule } from '@angular/common';

// // @Component({
// //   selector: 'app-seat-reservation',
// //   standalone: true,
// //   templateUrl: './seat-reservation.component.html',  // <-- Make sure this path is correct
// //   styleUrls: ['./seat-reservation.component.css'],
// //   imports: [CommonModule, RouterLinkActive],
// // })

// // export class SeatReservationComponent implements OnInit {
// //   movieId!: number;
// //   showtimeId!: number;
// //   availableSeats: any[] = [];
// //   selectedSeats: number[] = [];
// //   isSubmitting: boolean = false;

// //   constructor(private route: ActivatedRoute, private http: HttpClient) {}

// //   ngOnInit(): void {
// //     this.route.paramMap.subscribe(params => {
// //       const movieId = params.get('movieId');
// //       const showtimeId = params.get('showtimeId');
// //       if (movieId && showtimeId) {
// //         this.movieId = +movieId;
// //         this.showtimeId = +showtimeId;
// //         this.fetchAvailableSeats();
// //       }
// //     });
// //   }

// //   fetchAvailableSeats(): void {
// //     const url = `http://127.0.0.1:8000/api/available-seats/${this.movieId}/${this.showtimeId}/`;
// //     this.http.get<any[]>(url).subscribe({
// //       next: (data) => {
// //         this.availableSeats = data;
// //       },
// //       error: (err) => {
// //         console.error("Error fetching available seats", err);
// //       }
// //     });
// //   }

// //   toggleSeat(seatId: number): void {
// //     if (this.selectedSeats.includes(seatId)) {
// //       this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
// //     } else {
// //       this.selectedSeats.push(seatId);
// //     }
// //   }

// //   reserveSeats(): void {
// //     if (this.selectedSeats.length === 0) return;

// //     this.isSubmitting = true;
// //     const url = `http://127.0.0.1:8000/api/reserve-seats/`;
// //     const payload = {
// //       movieId: this.movieId,
// //       showtimeId: this.showtimeId,
// //       seatIds: this.selectedSeats
// //     };

// //     this.http.post(url, payload).subscribe({
// //       next: (res) => {
// //         alert("Reservation successful!");
// //         this.selectedSeats = [];
// //         this.fetchAvailableSeats();
// //         this.isSubmitting = false;
// //       },
// //       error: (err) => {
// //         console.error("Reservation failed", err);
// //         alert("Reservation failed. Please try again.");
// //         this.isSubmitting = false;
// //       }
// //     });
// //   }

// //   isSeatSelected(seatId: number): boolean {
// //     return this.selectedSeats.includes(seatId);
// //   }
// // }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-seat-reservation',
//   standalone: true,
//   templateUrl: './seat-reservation.component.html',
//   styleUrls: ['./seat-reservation.component.css'],
//   imports: [CommonModule, RouterLinkActive],
// })
// export class SeatReservationComponent implements OnInit {
//   movieId!: number;
//   showtimeId!: number;
//   availableSeats: any[] = [];
//   selectedSeats: number[] = [];
//   isSubmitting: boolean = false;

//   constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       const movieId = params.get('movieId');
//       const showtimeId = params.get('showtimeId');
//       if (movieId && showtimeId) {
//         this.movieId = +movieId;
//         this.showtimeId = +showtimeId;
//         this.fetchAvailableSeats();
//       }
//     });
//   }

//   fetchAvailableSeats(): void {
//     const url = `http://127.0.0.1:8000/api/available-seats/${this.movieId}/${this.showtimeId}/`;
//     const token = localStorage.getItem('token'); // Get token from storage
//     console.log(token)

//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${token}`
//     });

//     this.http.get<any[]>(url, { headers }).subscribe({
//       next: (data) => {
//         this.availableSeats = data;
//       },
//       error: (err) => {
//         console.error("Error fetching available seats", err);
//       }
//     });
//   }

//   toggleSeat(seatId: number): void {
//     if (this.selectedSeats.includes(seatId)) {
//       this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
//     } else {
//       this.selectedSeats.push(seatId);
//     }
//   }

//   reserveSeats(): void {
//     if (this.selectedSeats.length === 0) return;

//     this.isSubmitting = true;
//     const url = `http://127.0.0.1:8000/api/reserve/`;
//     const token = localStorage.getItem('token'); // Get token from storage

//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${token}`
//     });

//     const payload = {

//       showtime_id: this.showtimeId,
//       seat_ids: this.selectedSeats
//     };

//     this.http.post(url, payload, { headers }).subscribe({
//       next: (res) => {
//         alert("Reservation successful!");
//         this.selectedSeats = [];
//         this.fetchAvailableSeats();
//         this.isSubmitting = false;
//       },
//       error: (err) => {
//         console.error("Reservation failed", err);
//         alert("Reservation failed. Please try again.");
//         this.isSubmitting = false;
//       }
//     });
//   }

//   isSeatSelected(seatId: number): boolean {
//     return this.selectedSeats.includes(seatId);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-seat-reservation',
//   standalone: true,
//   templateUrl: './seat-reservation.component.html',
//   styleUrls: ['./seat-reservation.component.css'],
//   imports: [CommonModule, RouterLinkActive],
// })
// export class SeatReservationComponent implements OnInit {
//   movieId!: number;
//   showtimeId!: number;
//   availableSeats: any[] = [];
//   selectedSeats: number[] = [];
//   isSubmitting: boolean = false;

//   constructor(private route: ActivatedRoute, private http: HttpClient) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       const movieId = params.get('movieId');
//       const showtimeId = params.get('showtimeId');

//       if (movieId && showtimeId) {
//         this.movieId = +movieId;
//         this.showtimeId = +showtimeId;
//         this.fetchAvailableSeats();
//       }
//     });
//   }

//   fetchAvailableSeats(): void {
//     const token = localStorage.getItem('token');
//     const url = `http://127.0.0.1:8000/api/available-seats/${this.movieId}/${this.showtimeId}/`;

//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${token}`
//     });

//     this.http.get<any[]>(url, { headers }).subscribe({
//       next: data => this.availableSeats = data,
//       error: err => console.error('Error fetching available seats:', err)
//     });
//   }

//   toggleSeat(seatId: number): void {
//     if (this.selectedSeats.includes(seatId)) {
//       this.selectedSeats = this.selectedSeats.filter(id => id !== seatId);
//     } else {
//       this.selectedSeats.push(seatId);
//     }
//   }

//   reserveSeats(): void {
//     if (this.selectedSeats.length === 0) return;

//     this.isSubmitting = true;

//     const token = localStorage.getItem('token');
//     const url = `http://127.0.0.1:8000/api/reserve/`;

//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     });

//     const payload = {
//       showtime_id: this.showtimeId,
//       seat_ids: this.selectedSeats
//     };

//     this.http.post(url, payload, { headers }).subscribe({
//       next: () => {
//         alert("Reservation successful!");
//         this.selectedSeats = [];
//         this.fetchAvailableSeats();
//       },
//       error: err => {
//         console.error("Reservation failed:", err);
//         alert("Reservation failed. Please try again.");
//       },
//       complete: () => {
//         this.isSubmitting = false;
//       }
//     });
//   }

//   isSeatSelected(seatId: number): boolean {
//     return this.selectedSeats.includes(seatId);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

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
      alert('Seats reserved successfully!');
      // Optionally redirect or refresh seat list
    },
    error: (error) => {
      console.error('Reservation failed:', error);
      alert('Failed to reserve seats.');
    }
  });
}

}
