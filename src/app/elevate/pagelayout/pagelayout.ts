import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink, Router } from '@angular/router'; 
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-pagelayout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './pagelayout.html',
  styleUrl: './pagelayout.scss',
})
export class Pagelayout implements OnInit{


  isMenuOpen = false
  currentStep = 1;
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
