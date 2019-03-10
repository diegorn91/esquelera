import { Component, OnInit } from '@angular/core';
import {Esquela} from '../../Esquela';

@Component({
  selector: 'app-esquelas',
  templateUrl: './esquelas.component.html',
  styleUrls: ['./esquelas.component.css']
})
export class EsquelasComponent implements OnInit {

  esquela: Esquela = {
    user_id: 92,
    nombre: 'Rodrigo',
    apellidos: 'Rodriguez Romero',
    dni: '44412121F',
    email: 'rrr@gmail.com',
    fecha_defuncion: Date.now(),
    fecha_pago: Date.parse('31/10/1991'),
    descripcion: 'tarara tarara tarara murio el dia tal a las tal y lorem ipsum'
  };

  constructor() { }

  ngOnInit() {
  }

}
