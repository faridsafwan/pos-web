import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.scss'],
})
export class MapMainComponent implements OnInit {
  style = 'mapbox://styles/intuitivebadger/ckfdel5j40z8p19o6o0xu05sd';
  lat = 1.8657772136458395;
  lng = 103.11294244278632;
  zoom = 17;
  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
      // pitch: 60,
      preserveDrawingBuffer: true,
    });
  }
}
