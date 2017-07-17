import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class LayerService {

  public url: string = 'assets/county.json';

  constructor(private http: Http) { }

  public getGeoJsonLayer() {
    return this.http.get(this.url)
      .map((res) => {
        return res.json() || {}
      });
  }

}
