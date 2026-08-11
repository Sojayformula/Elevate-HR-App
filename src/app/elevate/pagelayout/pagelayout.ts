import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-pagelayout',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './pagelayout.html',
  styleUrl: './pagelayout.scss',
})
export class Pagelayout {

}
