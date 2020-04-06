import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  lng: number = 9.196;
  lat: number = 45.532;
  lng2: number = 9.1955;
  lat2: number = 45.535;
  lng3: number = 9.198;
  lat3: number = 45.534;

triangle: Array<Point> =
  [
    {lng:9.196, lat:45.532},
    {lng:9.1955, lat:45.535},
    {lng:9.198, lat:45.534}
  ]

rectangle: Array<Point> =
  [
    {lng:9.199149, lat:45.537287},
    {lng:9.199149, lat:45.533473},
    {lng:9.200697, lat:45.533473},
    {lng:9.200697, lat:45.537287},
  ]

  icon =  {
    url:'./assets/img/Goku.ico',
    scaledSize: {
      width: 40,
      height: 40
    }
  };
  icon2 =  {
    url:'./assets/img/Naruto.ico',
    scaledSize: {
      width: 40,
      height: 40
    }
  };
  icon3 =  {
    url:'./assets/img/Rufy.ico',
    scaledSize: {
      width: 40,
      height: 40
    }


  };
}
