import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink, Router } from '@angular/router'; 
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-page-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.scss',
})
export class PageLayout implements OnInit{


  isMenuOpen = false
  role = ""



  constructor(private router: Router, private authService: AuthService ){}

  ngOnInit(){
    // this.getAuthService()
  }

  // Humburger menu //
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenu(){
    this.isMenuOpen = false
  }

  // getAuthService(){
  //   this.authService.getUserRole
  // }

  
}
