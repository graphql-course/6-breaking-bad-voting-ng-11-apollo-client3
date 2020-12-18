import { Component, Input, OnChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ICharacter } from 'src/app/@interfaces/character.interface';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges{
  @Input() characters: Array<ICharacter> = [];
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (_: any, ctx: any) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)',
        'rgba(255, 255, 153, 0.3)',
        'rgba(153, 153, 255, 0.3)',
        'rgba(0, 51, 102, 0.3)',
        'rgba(102, 0, 102, 0.3)',
        'rgba(204, 0, 102, 0.3)',
        'rgba(153, 51, 51, 0.3)',
      ],
    },
  ];

  ngOnChanges(changes: any): void {
    console.log(changes);
    this.characters = changes.characters.currentValue;
    this.loadData();
  }

  loadData() {
    this.pieChartLabels = [];
    this.pieChartData = [];
    this.characters.map((character: ICharacter) => {
      this.pieChartLabels.push(character.name);
      this.pieChartData.push(character.votes);
    });
  }

}
