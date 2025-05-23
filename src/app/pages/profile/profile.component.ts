
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports:[CommonModule,RouterLink],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  reservations: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any>('http://127.0.0.1:8000/api/profile/', { headers }).subscribe({
      next: (res) => {
        this.username = res.profile.user.username;
        this.reservations = res.reservations;
      },
      error: (err) => {
        console.error('Failed to fetch profile:', err);
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString();
  }

  formatSeats(seats: any[]): string {
    return seats.map(seat => `Row ${seat.row} Seat ${seat.number}`).join(', ');
  }
}
