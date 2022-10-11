import { Main } from './models/main';
import { Root } from './models/root';
import { RootService } from './service/root-service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NumberValueAccessor, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'previsao-tempo-front-end';

  queryField = new FormControl();
  temp: Root;
  constructor(private rootService: RootService){}

  ngOnInit(): void{

  }

  getRoots(){
    this.rootService.getRoot(this.queryField.value).subscribe(data => {
      this.temp = data;
      console.log(data.name);
      console.log(data.main.temp);
      console.log(data.main.temp_max);
      console.log(data.main.temp_min);
      console.log(data.weather);
    });
  }
}
