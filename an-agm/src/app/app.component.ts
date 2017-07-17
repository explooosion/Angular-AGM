import { Component, OnInit, NgZone } from '@angular/core';
import { LayerService } from './service/layer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LayerService]
})
export class AppComponent implements OnInit {
  title: string = 'Angular4 AGM Demo';
  lat: number = 24.1504536;
  lng: number = 120.68325279999999;
  zoomValue: number = 15;
  iconUrl: string = 'http://i.imgur.com/0TctIfY.png';
  isOpen: boolean = false;
  radius: number = 500;
  fillColor: string = 'rgba(194,60,172,1)';
  geoJson: Object = null;
  map: any = null;
  geoJsonReady = false;
  constructor(
    private layerService: LayerService
  ) {
  }

  onReady(map) {
    this.map = map;
  }

  ngOnInit() {
    console.log('Start: ' + new Date());
    this.layerService.getGeoJsonLayer()
      .subscribe(
      result => {
        this.geoJson = result;

        // Style One Way
        //this.map.data.addGeoJson(this.geoJson);

        // Style Two Way
        this.geoJsonReady = true;

        this.map.data.setStyle(feature => this.style());
      });
  }

  public markerClick(e) {
    console.log(e);
    e.open();
    this.isOpen = true;
  }

  public style() {
    console.log(new Date());
    return {
      fillColor: 'green',
      strokeColor: 'green',
    };
  }
}
