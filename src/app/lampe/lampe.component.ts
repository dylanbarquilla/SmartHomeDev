import { Component, OnInit } from '@angular/core';
import { RestService  } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.scss']
})
export class LampeComponent implements OnInit {

  lampes: any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getLampes();
  }

  getLampes() {
    this.lampes = [];
    this.rest.getLigths().subscribe((data: {}) => {
      console.log(data);
      this.lampes = data;
    });
  }

}
