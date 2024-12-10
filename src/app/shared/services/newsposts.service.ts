import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewspostsService {
  constructor(private http: HttpClient) { }

  // Method to fetch data from JSON file
  getData(): Observable<any> {
    return this.http.get<any>('assets/datasets/news-posts.json'); // Adjust path if necessary
  }
}
