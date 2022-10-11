import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Root } from '../models/root';

@Injectable({
  providedIn: 'root'
})
export class RootService {

url: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
apiKey: string = 'dc145165f546eb9e9a96d6ab7fad79f3'

constructor(private httpClient: HttpClient){}

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

// Obter Informações Clima
getRoot(cityName: any): Observable<Root>{
    return this.httpClient.get<Root>(this.url+cityName+"&appid="+this.apiKey);
}
}
