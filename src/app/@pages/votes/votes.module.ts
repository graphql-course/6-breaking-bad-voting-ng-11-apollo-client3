import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotesRoutingModule } from './votes-routing.module';
import { VotesComponent } from './votes.component';
import { PieChartModule } from 'src/app/@shared/components/pie-chart/pie-chart.module';


@NgModule({
  declarations: [VotesComponent],
  imports: [
    CommonModule,
    VotesRoutingModule,
    PieChartModule
  ]
})
export class VotesModule { }
