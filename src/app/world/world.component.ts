import { Component, OnInit, Injectable } from '@angular/core';
import{HttpClient,HttpRequest} from '@angular/common/http';
import{Stats} from './world.model'
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { JsonPipe } from '@angular/common';
import { stringify } from 'querystring';
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})

@Injectable({providedIn: "root"})
export class WorldComponent implements OnInit {
  worldData: Stats[] = [];
  data = [];
  single: any[];
  view: any[] = [300, 300];
  search="";

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  //showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#000000', '#ff0033', '#ffe94a', '#13ff00']
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWorldStats();
    console.log(this.worldData);
  }


    getWorldStats(){
      this.http.get('https://covid19piechart.herokuapp.com/').pipe(map(data =>{
        for(const key in data){
          const dataArray=[];
          this.worldData.push({...data[key],"chart":[{"name":"dead","value":data[key].deaths.total.valueOf()},{"name":"critical","value":data[key].cases.critical.valueOf()},{"name":"active","value":data[key].cases.active.valueOf()},{"name":"recovered","value":data[key].cases.recovered.valueOf()}]})
        }
     }))
      .subscribe((d)=>{
        
        console.log(this.worldData[0].chart);
      });
      
  }
  getData(data){
    return data.chart
  }

  getGlobalTotal(){
    for (const key in this.worldData) {
        const element = this.worldData[key];
        
    }
  }

}
