import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseColorData } from '../models/color.model';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/**
 * Service that obtains the information of the list of colors, based on the endpoint obtained in the statement of the test
 * @author Camilo Gálvez Vidal
 */
export class ColorApiService {
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Method that makes the HTTPS GET call using the endpoint obtained from the test, to get the color list
   * @param page is the page you want to list
   * @param perPage is the number of colors to be listed on the page
   * @author Camilo Gálvez Vidal
   */
  getColors(page: number, perPage: number): Observable<ResponseColorData> {
    const par = new HttpParams().set('page', String(page)).set('per_page', String(perPage));
    return this.http.get<ResponseColorData>(URL.COLOR_LIST_BASE_API, { params: par });
  }
}
