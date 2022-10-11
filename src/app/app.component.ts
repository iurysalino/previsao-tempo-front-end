import { Root } from './models/root';
import { RootService } from './service/root-service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NumberValueAccessor, Validators } from '@angular/forms';
import { Weather } from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'previsao-tempo-front-end';

  queryField = new FormControl();
  cityName: string = this.queryField.value;
  temp: Root;
  listResponse: Root[];
  listWeather: Weather[];
  constructor(private rootService: RootService){}

  ngOnInit(): void{

  }

  getRoots(){
    if(this.cityName != ''){
    this.rootService.getRoot(this.queryField.value).subscribe(data => {
      this.temp = data;
      data.main.temp = Math.ceil(data.main.temp);
      data.main.temp_max = Math.ceil(data.main.temp_max);
      data.main.temp_min = Math.ceil(data.main.temp_min);
      this.listResponse = [data];
      this.listWeather = data.weather;
      console.log(data.name);
      console.log(Math.ceil(data.main.temp));
      console.log(Math.ceil(data.main.temp_max));
      console.log(Math.ceil(data.main.temp_min));
      console.log(data.weather);
    });
  }else{
    window.alert("Digite o Nome de Uma Cidade.");
  }
}
}
