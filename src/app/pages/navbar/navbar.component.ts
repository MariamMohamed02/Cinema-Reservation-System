import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthorizationService } from '../../core/services/authorization.service'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  private readonly authService = inject(AuthorizationService);
  private readonly router = inject(Router);

  isLoggedIn = false;

  ngOnInit(): void {
    this.authService.setUserToken();
    this.authService.userToken.subscribe(token => {
      this.isLoggedIn = !!token;
    });
  }

  logout(): void {
    this.authService.logOut();
  }
}
