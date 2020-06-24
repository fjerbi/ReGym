import { Geolocation } from '@ionic-native/geolocation';
import { TrackProvider } from './../../providers/track/track';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import collect from '@turf/collect';
import * as turf from '@turf/turf'
TrackProvider

/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {

  Coordinates: any;
  watch:any;
   constructor(public navCtrl: NavController,private geolocation: Geolocation,
  public _services:TrackProvider
  ) {

  }
  ngOnInit(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });

    let coordinatesarr=[]
    this._services.getCord().subscribe((response:any)=>{

   let result=response.routes[0].legs[0].steps

      for (let index = 0; index < result.length; index++) {
        const element = result[index].intersections;

        for (let j = 0; j < element.length; j++) {
          const loc = element[j];
          console.log(loc );
   coordinatesarr.push(loc.location)

        //

        }
      }
     localStorage.setItem('val',JSON.stringify(coordinatesarr))

    })
    console.log(coordinatesarr);



  }
  ionViewDidEnter() {


    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };




    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data);

      this.Coordinates = data.coords;
      this.executemap(this.Coordinates)



      // let from = turf.point([this.Coordinates.longitude, this.Coordinates.latitude]);
      // let to = turf.point([88.432312,22.571939]);

      // let distance = turf.distance(from, to, {units: 'kilometers'});
      // console.log('distance', this.Coordinates );
      // var position = turf.randomPosition([88.432312,22.571939, this.Coordinates.longitude, this.Coordinates.latitude])

      // console.log('position',position );

    });

  }


  executemap(Coordinates){
console.log(Coordinates);




    mapboxgl.accessToken = 'pk.eyJ1Ijoic3Zyb2NrIiwiYSI6ImNqa3dvN3lqaDBsaXYzcHE1dTRpNDQ2eG8ifQ.-mFoBzZa3cM3abiQb3F2Pg';
    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [Coordinates.longitude, Coordinates.latitude],
      zoom: 17,
      pitch: 80,
      minZoom: 12, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 17,
      container: 'map'
    });


    map.fitBounds([[  Coordinates.longitude,  Coordinates.latitude], [88.463232,22.605186]]);


    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    new mapboxgl.Marker()
    .setLngLat([ Coordinates.longitude,  Coordinates.latitude])
    .addTo(map);


    map.on('load', function() {
   let result=   []

   result.push( JSON.parse(  localStorage.getItem('val')))
console.log(result[0]);


      map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates":

                      result[0]

                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "red",
            "line-width": 2
        }
    });

      map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [Coordinates.longitude, Coordinates.latitude]
              },
              "properties": {
                "title": "MY location",
                "icon": "marker"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [88.463232,  22.605186]
              },
              "properties": {
                "title": "user location",
                "icon": "marker"
              }
            }]
          }
        },
        "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      });

    });

  }
}


