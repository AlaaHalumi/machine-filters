import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machine } from './machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private _url: string = "/assets/data/machines.json"

  constructor(private http: HttpClient) { }

  getData(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this._url)
    ;
}

    private extractData(res: Response) {
    let body = res.json();
    return body || [];
    }

    private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
    }
}
