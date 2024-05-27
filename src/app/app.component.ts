import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
// import { UtilityService } from './services/utility.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Fintrade';

  constructor(

    private router: Router
  ) { }

  ngOnInit(): void {

  }
}
