import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machine } from '../models/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private _url: string = "/assets/data/machines.json"

  constructor(private http: HttpClient) { }

  getData(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this._url);
  }
}
