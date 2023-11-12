import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.page.html',
  styleUrls: ['./dias.page.scss'],
})
export class DiasPage implements OnInit {
  daysOfWeek = [
    { name: 'Lunes', content: 'Ingles Intermedio       10:01 hrs' },
    { name: 'Martes', content: 'Contenido para el día martes' },
    { name: 'Miercoles', content: 'Contenido para el día martes' },
    { name: 'Jueves', content: 'Contenido para el día martes' },
    { name: 'Viernes', content: 'Contenido para el día martes' },
    { name: 'Sabado', content: 'Contenido para el día martes' },
    // Agrega los demás días de la semana de manera similar
  ];

  constructor() { }

  ngOnInit() {
  }

}
