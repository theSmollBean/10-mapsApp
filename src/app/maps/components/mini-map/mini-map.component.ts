import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent {

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;
  public map?: Map;

  ngAfterViewInit(): void {
    if ( !this.divMap ) throw "LngLat can't be null."
    if ( !this.lngLat ) throw "LngLat can't be null."

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
      });

      new Marker()
      .setLngLat( this.lngLat )
      .addTo( this.map );

  }
}
