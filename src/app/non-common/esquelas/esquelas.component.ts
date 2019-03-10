import { Component, OnInit } from '@angular/core';
import {ESQUELAS} from '../../mock-esquelas';

@Component({
  selector: 'app-esquelas',
  templateUrl: './esquelas.component.html',
  styleUrls: ['./esquelas.component.css']
})
export class EsquelasComponent implements OnInit {
  esquelas = ESQUELAS;
  cuantas  = ESQUELAS.length;
  constructor() { }

  ngOnInit() {
  }

}
