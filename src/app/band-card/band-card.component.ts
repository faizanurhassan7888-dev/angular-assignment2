import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Band } from '../models/band';

@Component({
  selector: 'app-band-card',
  imports: [CommonModule],
  templateUrl: './band-card.component.html',
  styleUrl: './band-card.component.css'
})
export class BandCardComponent {
  @Input({ required: true }) band!: Band;
  @Output() deleteRequested = new EventEmitter<number>();

  onDelete(): void {
    this.deleteRequested.emit(this.band.id);
  }

  getBorderColor(): string {
    return this.band.ticketPrice > 50 ? '#d64545' : '#3da35d';
  }
}
