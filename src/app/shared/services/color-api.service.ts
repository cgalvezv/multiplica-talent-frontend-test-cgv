import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseColorData } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorApiService {

  constructor(
    private _http: HttpClient,
  ) { }

  getColors(page: number, perPage: number): Observable<ResponseColorData> {
    const par = new HttpParams().set('page', String(page)).set('per_page', String(perPage));
    return this._http.get<ResponseColorData>('https://reqres.in/api/colors', { params: par });
  }
}
