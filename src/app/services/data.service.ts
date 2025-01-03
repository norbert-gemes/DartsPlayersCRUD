import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:3000/darstplayers';

  constructor() {}
}
