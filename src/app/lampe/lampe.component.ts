import { Component, OnInit } from '@angular/core';
import { RestService  } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSliderChange} from '@angular/material';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.scss']
})
export class LampeComponent implements OnInit {

  lampes: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getLampes();
  }

  getLampes() {
    this.lampes = [];
    this.rest.getLigths().subscribe((data: {}) => {
      this.lampes = data;
    });
  }

  sliderChange($event: MatSliderChange, p: any) {
    console.log($event.value);
    console.log(p.id);
    this.rest.setLight(p.id, $event.value).subscribe((data: {}) => {

    });
  }
}
