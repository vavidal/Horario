import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-horario',
  templateUrl: './mi-horario.page.html',
  styleUrls: ['./mi-horario.page.scss'],
})
export class MiHorarioPage implements OnInit {
    days = [
      { name: 'Lunes', description: 'Primer día de la semana laboral' },
      { name: 'Martes', description: 'Segundo día de la semana laboral' },
      { name: 'Miércoles', description: 'Tercer día de la semana laboral' },
      { name: 'Jueves', description: 'Cuarto día de la semana laboral' },
      { name: 'Viernes', description: 'Quinto día de la semana laboral' },
      { name: 'Sábado', description: 'Fin de semana' },
    ];

  constructor() { }

  ngOnInit() {
  }

}
