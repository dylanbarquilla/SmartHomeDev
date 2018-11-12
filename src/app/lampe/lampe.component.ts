import {Component, OnInit, NgModule, OnChanges, Input, ChangeDetectionStrategy} from '@angular/core';
import { RestService  } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSliderChange} from '@angular/material';
import { MaterialModule } from '../material';

import { Lamp } from '../model/lamp';
import {forEach} from '@angular/router/src/utils/collection';


@NgModule({
  imports: []
})


@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.scss']
})



export class LampeComponent implements OnInit {

  @Input() lampes: Lamp[] = [];
  checkedList: boolean[] = [];
  essai: String = 'coucou';
  checkboxAll = false;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.getLampes();
  }


  getLampes() {
    const light1 = new Lamp({id: 12, name: 'Test 1', piece: 'Cuisine', color: '#000000'});
    const light2 = new Lamp({id: 13, name: 'Test 2', piece: 'Salon', intensity: 50, color: '#125698'});
    const light3 = new Lamp({id: 14, name: 'Test 3', piece: 'Cuisine', intensity: 10, color: '#649731'});

    this.lampes.push(light1, light2, light3);


    /*
    TODO: Remttre ça une fois qu'on a fait le mapping avec le BACK
    this.rest.getLigths().subscribe((data: []) => {
      this.lampes = data;
    });
    */
  }


  test() {
    console.log(this.lampes);
  }

  changeCheckboxAll() {
    console.log(this.checkedList);
    if (this.checkboxAll) {

    }
  }

  /** EXCHANGE WITH UI */

  sliderChange($event: MatSliderChange, p: Lamp) {
    p.intensity = $event.value;

    /*
    console.log("EVENT : " + $event.value);
    console.log("ID : " + p.id);
    console.log("Intensite : " + p.intensity);
    */


    this.rest.setLight(p.id, $event.value).subscribe((data: {}) => {
      // TODO : setter for the light
    });



  }
}
