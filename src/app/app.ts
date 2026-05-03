import { Component } from '@angular/core';
import { BandListComponent } from './band-list/band-list.component';

@Component({
  selector: 'app-root',
  imports: [BandListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
