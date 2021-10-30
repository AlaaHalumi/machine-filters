import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Machine } from '../models/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private machineList : BehaviorSubject<Array<Machine>> = new BehaviorSubject([]);

  private _url: string = "/assets/data/machines.json"

  constructor(private http: HttpClient) { }

  getData(): Observable<Machine[]> {
    // return this.http.get<Machine[]>(this._url);
    this.http.get<Array<Machine[]>>(this._url).subscribe((data: Array<Machine[]>) => {
      if(data){
        this.machineList.next(<[]>data);
      }
  });
  return  this.machineList;
  }
}
