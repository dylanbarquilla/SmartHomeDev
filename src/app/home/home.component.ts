import { Component, OnInit } from '@angular/core';
import { RestService  } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbLampes = 0;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getNbLampes();
  }


  private getNbLampes() {
    let lampes: any = [];
    this.rest.getLigths().subscribe((data: {}) => {
      lampes = data;
      this.nbLampes = lampes.length;
    });

  }
}
