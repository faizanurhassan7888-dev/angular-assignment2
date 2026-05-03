export interface Band {
  id: number;
  name: string;
  genre: 'Metal' | 'Rock' | 'Electronic' | 'Jazz';
  nextShowDate: Date;
  isBooked: boolean;
  ticketPrice: number;
}
