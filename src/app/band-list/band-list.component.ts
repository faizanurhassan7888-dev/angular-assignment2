import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BandCardComponent } from '../band-card/band-card.component';
import { Band } from '../models/band';

@Component({
  selector: 'app-band-list',
  imports: [CommonModule, FormsModule, BandCardComponent],
  templateUrl: './band-list.component.html',
  styleUrl: './band-list.component.css'
})
export class BandListComponent {
  bands: Band[] = [
    {
      id: 1,
      name: 'Blackdogmoon',
      genre: 'Metal',
      nextShowDate: new Date('2026-06-14'),
      isBooked: true,
      ticketPrice: 15
    },
    {
      id: 2,
      name: 'Neon Static',
      genre: 'Rock',
      nextShowDate: new Date('2026-06-22'),
      isBooked: false,
      ticketPrice: 42
    },
    {
      id: 3,
      name: 'Pulse Theory',
      genre: 'Electronic',
      nextShowDate: new Date('2026-07-03'),
      isBooked: true,
      ticketPrice: 65
    },
    {
      id: 4,
      name: 'Blue Lantern Quartet',
      genre: 'Jazz',
      nextShowDate: new Date('2026-07-10'),
      isBooked: false,
      ticketPrice: 58
    },
    {
      id: 5,
      name: 'Rivet Hearts',
      genre: 'Rock',
      nextShowDate: new Date('2026-07-19'),
      isBooked: true,
      ticketPrice: 49
    }
  ];

  selectedGenre = 'All';

  readonly genres = ['All', 'Metal', 'Rock', 'Electronic', 'Jazz'];

  get filteredBands(): Band[] {
    if (this.selectedGenre === 'All') {
      return this.bands;
    }

    return this.bands.filter((band) => band.genre === this.selectedGenre);
  }

  removeBand(id: number): void {
    this.bands = this.bands.filter((band) => band.id !== id);
  }
}
