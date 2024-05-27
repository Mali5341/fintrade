import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ChartType } from 'angular-google-charts';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['company', 'investDate', 'invested', 'netValue', 'multiple']; dataSource!: MatTableDataSource<any>;
  cardsData: any = []
  isAsideOpen: boolean = false;
  pageEvent: any = { pageSize: 10, pageIndex: 0 };
  pageSizeOptions: number[] = [5, 10, 15, 20, 25];
  activityData: any[] = []
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  isOpen: boolean = false;
  data!: number;

  obligationData: any[] = []
  chart = {
    type: ChartType.LineChart,
    data: [
      ["Jan", 1.0,],
      ["Feb", 3.9,],
      ["Mar", 8.5],
      ["Apr", 14.5],
      ["May", 18.2,],
      ["Jun", 20.5,],
      ["Jul", 9.2,],
      ["Aug", 13.5,],
      ["Sep", 23.3,],
      ["Oct", 18.3,],
      ["Nov", 13.9],
      ["Dec", 30.6]
    ],
    columnNames: ["Month", "",],
    options: {
      colors: ['#e6693e', '##e0440e ', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      is3D: true
    },
  };
  constructor(
    private service: ServiceService,
  ) { }

  ngOnInit(): void {
    this.cardsData = this.service.cards()
    console.log(this.cardsData);


    this.dataSource = new MatTableDataSource<any>(this.service.tableData());
    console.log(this.dataSource);
    this.activityData = this.service.activities();
    console.log(this.activityData);

    this.obligationData = this.service.obligation()
    console.log(this.obligationData);

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  toggleSearchBox() {
    this.isOpen = !this.isOpen;
  }

}
