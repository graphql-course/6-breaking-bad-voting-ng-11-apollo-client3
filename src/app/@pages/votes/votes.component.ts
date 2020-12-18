import { Component, OnInit } from '@angular/core';
// https://valor-software.com/ng2-charts/
// Instalar librería siguiendo los pasos
// Crear el componente para el gráfico
// ng g m @shared/components/bar-chart && ng g c @shared/components/bar-chart --skip-tests
// Añadir "BarChartModule" dentro de votes.module.ts
// Añadir "ChartsModule" dentro de bar-chart.module.ts
// Añadir lo relacionado a pie-chart, el ejemplo para tener la gráfica
// en votes.component.html, añadir <app-bar-chart></app-bar-chart>
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
