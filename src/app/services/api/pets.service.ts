import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetPetsResponse } from '../../core/models/GetPets.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private http = inject(HttpClient);
  private apiUrl = 'https://bda8bbb3-ddb0-4c4c-a1de-41b4f109fb0a.mock.pstmn.io';


  listarPets() {
    return this.http.get<GetPetsResponse[]>
      (`${this.apiUrl}/api/list`);
  }
}
