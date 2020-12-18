import { BarChartModule } from './../../@shared/components/bar-chart/bar-chart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotesRoutingModule } from './votes-routing.module';
import { VotesComponent } from './votes.component';


@NgModule({
  declarations: [VotesComponent],
  imports: [
    CommonModule,
    VotesRoutingModule,
    BarChartModule
  ]
})
export class VotesModule { }
