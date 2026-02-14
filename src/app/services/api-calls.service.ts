import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


interface DatamuseWord {
  word: string;
  score?: number;
  tags?: string[];
}

export interface SubmitResponse {
  result: string;
}


@Injectable({ providedIn: 'root' })
export class ApiCallsService {
  private readonly baseUrl = 'https://api.datamuse.com';
  constructor(private http: HttpClient) {}

  
  synonyms(ml: string, max = 20): Observable<string[]> {
    const q = encodeURIComponent(ml.trim());
    const url = `${this.baseUrl}/words?ml=${q}&max=${max}`;

    return this.http.get<DatamuseWord[]>(url).pipe(
      map(items => items.map(x => x.word).filter(Boolean))
    );
  }
}
