import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NotasProvider {
    private url = "https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2"

    constructor(private http: HttpClient) { }

    getNotas(){
        return this.http.get(this.url)
    }
}
